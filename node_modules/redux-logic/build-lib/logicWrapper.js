"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logicWrapper;

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.function.name");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _createLogicAction$ = _interopRequireDefault(require("./createLogicAction$"));

var _utils = require("./utils");

var _createDispatch2 = _interopRequireDefault(require("./createDispatch"));

var _execProcessFn = _interopRequireDefault(require("./execProcessFn"));

var _createCancelled$2 = _interopRequireDefault(require("./createCancelled$"));

var _createDepObject = _interopRequireDefault(require("./createDepObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MATCH_ALL_TYPES = '*';

function logicWrapper(logic, store, deps, monitor$) {
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
    var action$ = actionIn$.pipe((0, _operators.share)());
    var cancel$ = cancelTypes.length ? action$.pipe((0, _operators.filter)(function (action) {
      return matchesType(cancelTypes, action.type);
    })) : null;
    var hasIntercept = logic.validate || logic.transform; // shortcut optimization if no intercept let action fall through
    // and just exec the processFn

    var mergeMapOrTap = hasIntercept ? (0, _operators.mergeMap)(function (action) {
      return (0, _createLogicAction$.default)({
        action: action,
        logic: logic,
        store: store,
        deps: deps,
        cancel$: cancel$,
        monitor$: monitor$,
        action$: action$
      });
    }) : (0, _operators.tap)(function (action) {
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

      var _createCancelled$ = (0, _createCancelled$2.default)({
        action: action,
        cancel$: cancel$,
        monitor$: monitor$,
        logic: logic
      }),
          cancelled$ = _createCancelled$.cancelled$,
          setInterceptComplete = _createCancelled$.setInterceptComplete;

      var _createDispatch = (0, _createDispatch2.default)({
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

      var depObj = (0, _createDepObject.default)({
        deps: deps,
        cancelled$: cancelled$,
        ctx: ctx,
        getState: getState,
        action: action,
        action$: action$
      });

      _rxjs.asapScheduler.schedule(function () {
        setInterceptComplete();
        (0, _execProcessFn.default)({
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
    (0, _operators.filter)(function (action) {
      return matchesType(type, action.type);
    }), debounce ? (0, _operators.debounceTime)(debounce) : null, throttle ? (0, _operators.throttleTime)(throttle) : null, mergeMapOrTap].filter(_utils.identityFn);
    var matchingAction$ = action$.pipe.apply(action$, _toConsumableArray(matchingOps)); // shortcut optimization
    // if type is match all '*', then no need to create other side of pipe

    if (type === MATCH_ALL_TYPES) {
      return matchingAction$;
    } // types that don't match will bypass this logic


    var nonMatchingAction$ = action$.pipe((0, _operators.filter)(function (action) {
      return !matchesType(type, action.type);
    }));
    return (0, _rxjs.merge)(nonMatchingAction$, matchingAction$);
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