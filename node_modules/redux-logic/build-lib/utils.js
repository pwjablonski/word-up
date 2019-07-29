"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityFn = identityFn;
exports.stringifyType = stringifyType;
exports.wrapActionForIntercept = wrapActionForIntercept;
exports.isInterceptAction = isInterceptAction;
exports.unwrapInterceptAction = unwrapInterceptAction;

require("core-js/modules/es6.regexp.to-string");

function identityFn(x) {
  return x;
} // Symbols and Arrays containing Symbols cannot be interpolated in template strings,
// they must be explicitly converted with toString()
// eslint-disable-next-line import/prefer-default-export


function stringifyType(type) {
  return Array.isArray(type) ? type.map(function (type) {
    return type.toString();
  }) : type.toString();
} // we want to know that this was from intercept (validate/transform)
// so that we don't apply any processOptions wrapping to it


function wrapActionForIntercept(act) {
  /* istanbul ignore if  */
  if (!act) {
    return act;
  }

  return {
    __interceptAction: act
  };
}

function isInterceptAction(act) {
  // eslint-disable-next-line no-underscore-dangle
  return act && act.__interceptAction;
}

function unwrapInterceptAction(act) {
  // eslint-disable-next-line no-underscore-dangle
  return act.__interceptAction;
}