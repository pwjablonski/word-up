import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.function.name";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { Observable, merge, asapScheduler } from 'rxjs';
import { debounceTime, filter, map, mergeMap, share, tap, throttleTime } from 'rxjs/operators';
import createLogicAction$ from './createLogicAction$';
import { identityFn } from './utils';
import createDispatch from './createDispatch';
import execProcessFn from './execProcessFn';
import createCancelled$ from './createCancelled$';
import createDepObject from './createDepObject';
var MATCH_ALL_TYPES = '*';
export default function logicWrapper(logic, store, deps, monitor$) {
  var name = logic.name,
      type = logic.type,
      cancelType = logic.cancelType,
      latest = logic.latest,
      debounce = logic.debounce,
      throttle = logic.throttle,
      processFn = logic.process,
      dispatchReturn = logic.processOptions.dispatchReturn;
  var getState = store.getState; // cancel on cancelType or if take latest specified

  var cancelTypes = [].concat(type && latest ? type : []).concat(cancelType || []);
  return function wrappedLogic(actionIn$) {
    // we want to share the same copy amongst all here
    var action$ = actionIn$.pipe(share());
    var cancel$ = cancelTypes.length ? action$.pipe(filter(function (action) {
      return matchesType(cancelTypes, action.type);
    })) : null;
    var hasIntercept = logic.validate || logic.transform; // shortcut optimization if no intercept let action fall through
    // and just exec the processFn

    var mergeMapOrTap = hasIntercept ? mergeMap(function (action) {
      return createLogicAction$({
        action: action,
        logic: logic,
        store: store,
        deps: deps,
        cancel$: cancel$,
        monitor$: monitor$,
        action$: action$
      });
    }) : tap(function (action) {
      // mimic the events as if went through createLogicAction$
      // also in createLogicAction$
      monitor$.next({
        action: action,
        name: name,
        op: 'begin'
      });
      monitor$.next({
        action: action,
        nextAction: action,
        name: name,
        shouldProcess: true,
        op: 'next'
      });

      var _createCancelled$ = createCancelled$({
        action: action,
        cancel$: cancel$,
        monitor$: monitor$,
        logic: logic
      }),
          cancelled$ = _createCancelled$.cancelled$,
          setInterceptComplete = _createCancelled$.setInterceptComplete;

      var _createDispatch = createDispatch({
        action: action,
        cancel$: cancel$,
        cancelled$: cancelled$,
        logic: logic,
        monitor$: monitor$,
        store: store
      }),
          dispatch = _createDispatch.dispatch,
          dispatch$ = _createDispatch.dispatch$,
          done = _createDispatch.done;

      var ctx = {}; // no intercept, so empty ctx;

      var depObj = createDepObject({
        deps: deps,
        cancelled$: cancelled$,
        ctx: ctx,
        getState: getState,
        action: action,
        action$: action$
      });
      asapScheduler.schedule(function () {
        setInterceptComplete();
        execProcessFn({
          depObj: depObj,
          dispatch: dispatch,
          dispatch$: dispatch$,
          dispatchReturn: dispatchReturn,
          done: done,
          name: name,
          processFn: processFn
        });
      });
    });
    var matchingOps = [// operations to perform, falsey filtered out
    filter(function (action) {
      return matchesType(type, action.type);
    }), debounce ? debounceTime(debounce) : null, throttle ? throttleTime(throttle) : null, mergeMapOrTap].filter(identityFn);
    var matchingAction$ = action$.pipe.apply(action$, _toConsumableArray(matchingOps)); // shortcut optimization
    // if type is match all '*', then no need to create other side of pipe

    if (type === MATCH_ALL_TYPES) {
      return matchingAction$;
    } // types that don't match will bypass this logic


    var nonMatchingAction$ = action$.pipe(filter(function (action) {
      return !matchesType(type, action.type);
    }));
    return merge(nonMatchingAction$, matchingAction$);
  };
}

function matchesType(tStrArrRe, type) {
  /* istanbul ignore if  */
  if (!tStrArrRe) {
    return false;
  } // nothing matches none


  if (_typeof(tStrArrRe) === 'symbol') {
    return tStrArrRe === type;
  }

  if (typeof tStrArrRe === 'string') {
    return tStrArrRe === type || tStrArrRe === MATCH_ALL_TYPES;
  }

  if (Array.isArray(tStrArrRe)) {
    return tStrArrRe.some(function (x) {
      return matchesType(x, type);
    });
  } // else assume it is a RegExp


  return tStrArrRe.test(type);
}