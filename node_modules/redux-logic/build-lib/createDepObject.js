"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDepObject;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createDepObject(_ref) {
  var deps = _ref.deps,
      cancelled$ = _ref.cancelled$,
      ctx = _ref.ctx,
      getState = _ref.getState,
      action = _ref.action,
      action$ = _ref.action$;
  return _objectSpread({}, deps, {
    cancelled$: cancelled$,
    ctx: ctx,
    getState: getState,
    action: action,
    action$: action$
  });
}