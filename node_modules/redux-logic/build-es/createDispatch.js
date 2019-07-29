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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import isPromise from 'is-promise';
import { Subject, from, of, throwError, isObservable } from 'rxjs';
import { defaultIfEmpty, tap, filter, map, mergeAll, takeUntil } from 'rxjs/operators';
import { identityFn, isInterceptAction, unwrapInterceptAction } from './utils';
var UNHANDLED_LOGIC_ERROR = 'UNHANDLED_LOGIC_ERROR'; // returns { dispatch, dispatch$, done };

export default function createDispatch(_ref) {
  var action = _ref.action,
      cancel$ = _ref.cancel$,
      cancelled$ = _ref.cancelled$,
      logic = _ref.logic,
      monitor$ = _ref.monitor$,
      store = _ref.store;
  var name = logic.name,
      _logic$processOptions = logic.processOptions,
      dispatchMultiple = _logic$processOptions.dispatchMultiple,
      successType = _logic$processOptions.successType,
      failType = _logic$processOptions.failType;
  var dispatchOps = [mergeAll(), cancel$ ? takeUntil(cancel$) : null, // only takeUntil if cancel or latest
  tap(mapToActionAndDispatch, // next
  mapErrorToActionAndDispatch // error
  )].filter(identityFn);
  var dispatch$ = new Subject();
  dispatch$.pipe.apply(dispatch$, _toConsumableArray(dispatchOps)).subscribe({
    error: function error()
    /* err */
    {
      monitor$.next({
        action: action,
        name: name,
        op: 'end'
      }); // signalling complete here since error was dispatched
      // accordingly, otherwise if we were to signal an error here
      // then cancelled$ subscriptions would have to specifically
      // handle error in subscribe otherwise it will throw. So
      // it doesn't seem that it is worth it.

      cancelled$.complete();
      cancelled$.unsubscribe();
    },
    complete: function complete() {
      monitor$.next({
        action: action,
        name: name,
        op: 'end'
      });
      cancelled$.complete();
      cancelled$.unsubscribe();
    }
  });

  function storeDispatch(act) {
    monitor$.next({
      action: action,
      dispAction: act,
      op: 'dispatch'
    });
    return store.dispatch(act);
  }

  function mapToActionAndDispatch(actionOrValue) {
    var act = isInterceptAction(actionOrValue) ? unwrapInterceptAction(actionOrValue) : successType ? mapToAction(successType, actionOrValue, false) : actionOrValue;

    if (act) {
      storeDispatch(act);
    }
  }
  /* eslint-disable consistent-return */


  function mapErrorToActionAndDispatch(actionOrValue) {
    // action dispatched from intercept needs to be unwrapped and sent as is

    /* istanbul ignore if  */
    if (isInterceptAction(actionOrValue)) {
      var interceptAction = unwrapInterceptAction(actionOrValue);
      return storeDispatch(interceptAction);
    }

    if (failType) {
      // we have a failType, if truthy result we will use it
      var act = mapToAction(failType, actionOrValue, true);

      if (act) {
        return storeDispatch(act);
      }

      return; // falsey result from failType, no dispatch
    } // no failType so must wrap values with no type


    if (actionOrValue instanceof Error) {
      var _act = actionOrValue.type ? actionOrValue : // has type
      {
        type: UNHANDLED_LOGIC_ERROR,
        payload: actionOrValue,
        error: true
      };

      return storeDispatch(_act);
    } // dispatch objects or functions as is


    var typeOfValue = _typeof(actionOrValue);

    if (actionOrValue && ( // not null and is object | fn
    typeOfValue === 'object' || typeOfValue === 'function')) {
      return storeDispatch(actionOrValue);
    } // wasn't an error, obj, or fn, so we will wrap in unhandled


    storeDispatch({
      type: UNHANDLED_LOGIC_ERROR,
      payload: actionOrValue,
      error: true
    });
  }
  /* eslint-enable consistent-return */


  function mapToAction(type, payload, err) {
    if (typeof type === 'function') {
      // action creator fn
      return type(payload);
    }

    var act = {
      type: type,
      payload: payload
    };

    if (err) {
      act.error = true;
    }

    return act;
  } // allowMore is now deprecated in favor of variable process arity
  // which sets processOptions.dispatchMultiple = true then
  // expects done() cb to be called to end
  // Might still be needed for internal use so keeping it for now


  var DispatchDefaults = {
    allowMore: false
  };

  function dispatch(act) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _applyDispatchDefault = applyDispatchDefaults(options),
        allowMore = _applyDispatchDefault.allowMore;

    if (typeof act !== 'undefined') {
      // ignore empty action
      dispatch$.next( // create obs for mergeAll
      // eslint-disable-next-line no-nested-ternary
      isObservable(act) ? act : isPromise(act) ? from(act) : act instanceof Error ? throwError(act) : of(act));
    }

    if (!(dispatchMultiple || allowMore)) {
      dispatch$.complete();
    }

    return act;
  }

  function applyDispatchDefaults(options) {
    return _objectSpread({}, DispatchDefaults, options);
  }

  function done() {
    dispatch$.complete();
  }

  return {
    dispatch: dispatch,
    dispatch$: dispatch$,
    done: done
  };
}