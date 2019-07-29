import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.function.name";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import isPromise from 'is-promise';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { identityFn, wrapActionForIntercept } from './utils';
import createDepObject from './createDepObject';
import execProcessFn from './execProcessFn';
import createDispatch from './createDispatch';
import createCancelled$ from './createCancelled$';

var debug = function debug()
/* ...args */
{};

export default function createLogicAction$(_ref) {
  var _Observable$create;

  var action = _ref.action,
      logic = _ref.logic,
      store = _ref.store,
      deps = _ref.deps,
      cancel$ = _ref.cancel$,
      monitor$ = _ref.monitor$,
      action$ = _ref.action$;
  var getState = store.getState;
  var name = logic.name,
      processFn = logic.process,
      _logic$processOptions = logic.processOptions,
      dispatchReturn = _logic$processOptions.dispatchReturn,
      dispatchMultiple = _logic$processOptions.dispatchMultiple,
      successType = _logic$processOptions.successType,
      failType = _logic$processOptions.failType;
  var intercept = logic.validate || logic.transform; // aliases

  debug('createLogicAction$', name, action);
  monitor$.next({
    action: action,
    name: name,
    op: 'begin'
  }); // also in logicWrapper

  var logicActionOps = [cancel$ ? takeUntil(cancel$) : null, // only takeUntil if cancel or latest
  take(1)].filter(identityFn); // logicAction$ is used for the mw next(action) call

  var logicAction$ = (_Observable$create = Observable.create(function (logicActionObs) {
    // create notification subject for process which we dispose of
    // when take(1) or when we are done dispatching
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
        done = _createDispatch.done; // passed into each execution phase hook as first argument


    var ctx = {}; // for sharing data between hooks

    var depObj = createDepObject({
      deps: deps,
      cancelled$: cancelled$,
      ctx: ctx,
      getState: getState,
      action: action,
      action$: action$
    });

    function shouldDispatch(act, useDispatch) {
      if (!act) {
        return false;
      }

      if (useDispatch === 'auto') {
        // dispatch on diff type
        return act.type !== action.type;
      }

      return useDispatch; // otherwise forced truthy/falsy
    }

    var AllowRejectNextDefaults = {
      useDispatch: 'auto'
    };

    function applyAllowRejectNextDefaults(options) {
      return _objectSpread({}, AllowRejectNextDefaults, options);
    }

    function allow(act) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AllowRejectNextDefaults;
      handleNextOrDispatch(true, act, options);
    }

    function reject(act) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AllowRejectNextDefaults;
      handleNextOrDispatch(false, act, options);
    }

    function handleNextOrDispatch(shouldProcess, act, options) {
      var shouldProcessAndHasProcessFn = shouldProcess && processFn;

      var _applyAllowRejectNext = applyAllowRejectNextDefaults(options),
          useDispatch = _applyAllowRejectNext.useDispatch;

      if (shouldDispatch(act, useDispatch)) {
        monitor$.next({
          action: action,
          dispAction: act,
          name: name,
          shouldProcess: shouldProcess,
          op: 'nextDisp'
        });
        setInterceptComplete();
        dispatch(wrapActionForIntercept(act), {
          allowMore: true
        }); // will be completed later

        logicActionObs.complete(); // dispatched action, so no next(act)
      } else {
        // normal next
        if (act) {
          monitor$.next({
            action: action,
            nextAction: act,
            name: name,
            shouldProcess: shouldProcess,
            op: 'next'
          });
        } else {
          // act is undefined, filtered
          monitor$.next({
            action: action,
            name: name,
            shouldProcess: shouldProcess,
            op: 'filtered'
          });
          setInterceptComplete();
        }

        postIfDefinedOrComplete(act, logicActionObs);
      } // unless rejected, we will process even if allow/next dispatched


      if (shouldProcessAndHasProcessFn) {
        // processing, was an accept
        // if action provided is empty, give process orig
        depObj.action = act || action;
        execProcessFn({
          depObj: depObj,
          dispatch: dispatch,
          done: done,
          processFn: processFn,
          dispatchReturn: dispatchReturn,
          dispatch$: dispatch$,
          name: name
        });
      } else {
        // not processing, must have been a reject
        dispatch$.complete();
      }
    }
    /* post if defined, then complete */


    function postIfDefinedOrComplete(act, act$) {
      if (act) {
        act$.next(act); // triggers call to middleware's next()
      }

      setInterceptComplete();
      act$.complete();
    } // start use of the action


    function start() {
      // normal intercept and processing
      return intercept(depObj, allow, reject);
    }

    start();
  })).pipe.apply(_Observable$create, _toConsumableArray(logicActionOps)); // take, takeUntil


  return logicAction$;
}