(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReduxLogic"] = factory();
	else
		root["ReduxLogic"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __extends; });
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__[/* empty */ "a"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__[/* empty */ "a"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* rxSubscriber */ "a"]]();
                        _this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        _this.destination = trustedSubscriber;
                        trustedSubscriber._addParentTeardownLogic(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* rxSubscriber */ "a"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._addParentTeardownLogic = function (parentTeardownLogic) {
        if (parentTeardownLogic !== this) {
            this._parentSubscription = this.add(parentTeardownLogic);
        }
    };
    Subscriber.prototype._unsubscribeParentSubscription = function () {
        if (this._parentSubscription !== null) {
            this._parentSubscription.unsubscribe();
        }
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__[/* Subscription */ "a"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__[/* empty */ "a"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "a"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__[/* hostReportError */ "a"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__[/* hostReportError */ "a"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__[/* hostReportError */ "a"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__[/* hostReportError */ "a"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('syncErrorThrowable' in obj && obj[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__[/* rxSubscriber */ "a"]]);
}
//# sourceMappingURL=Subscriber.js.map


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
var Observer = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber["a" /* Subscriber */]) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber["a" /* rxSubscriber */]]) {
            return nextOrObserver[rxSubscriber["a" /* rxSubscriber */]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber["a" /* Subscriber */](Observer["a" /* empty */]);
    }
    return new Subscriber["a" /* Subscriber */](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
var observable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/noop.js
var noop = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return noop["a" /* noop */];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/config.js
var config = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable_Observable; });
/** PURE_IMPORTS_START _util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */




var Observable_Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink._addParentTeardownLogic(this.source || (config["a" /* config */].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config["a" /* config */].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable["a" /* observable */]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config["a" /* config */].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
var isObject = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
var isFunction = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/errorObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/tryCatch.js
/** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.e = e;
        return errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
//# sourceMappingURL=tryCatch.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription_Subscription; });
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */






var Subscription_Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (Object(isFunction["a" /* isFunction */])(_unsubscribe)) {
            var trial = tryCatch(_unsubscribe).call(this);
            if (trial === errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.e instanceof UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.e.errors) : [errorObject.e]);
            }
        }
        if (Object(isArray["a" /* isArray */])(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(isObject["a" /* isObject */])(sub)) {
                    var trial = tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.e;
                        if (err instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identityFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stringifyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return wrapActionForIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isInterceptAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unwrapInterceptAction; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(62)('wks');
var uid = __webpack_require__(36);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(73);
var toPrimitive = __webpack_require__(61);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rxSubscriber; });
/* unused harmony export $$rxSubscriber */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? /*@__PURE__*/ Symbol.for('rxSubscriber')
    : '@@rxSubscriber';
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSymbolIterator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iterator; });
/* unused harmony export $$iterator */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(33);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(35);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(9) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(86);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(37);
var toIObject = __webpack_require__(25);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(89)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(88);
var defined = __webpack_require__(64);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(24);
var getKeys = __webpack_require__(39);
var redefine = __webpack_require__(34);
var global = __webpack_require__(11);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(37);
var wks = __webpack_require__(6);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */


function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) {
        destination = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__[/* InnerSubscriber */ "a"](outerSubscriber, outerValue, outerIndex);
    }
    if (destination.closed) {
        return;
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__[/* subscribeTo */ "a"])(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "a"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__[/* AsyncScheduler */ "a"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__[/* AsyncAction */ "a"]);
//# sourceMappingURL=async.js.map


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "a"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__[/* hostReportError */ "a"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(85);
var anObject = __webpack_require__(17);
var $flags = __webpack_require__(75);
var DESCRIPTORS = __webpack_require__(9);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(34)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(16)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var hide = __webpack_require__(18);
var has = __webpack_require__(19);
var SRC = __webpack_require__(36)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(23).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(23);
var hide = __webpack_require__(18);
var redefine = __webpack_require__(34);
var ctx = __webpack_require__(76);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(78);
var enumBugKeys = __webpack_require__(66);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(68);
var $keys = __webpack_require__(39);

__webpack_require__(97)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configureLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createLogic; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);






var allowedOptions = ['name', 'type', 'cancelType', 'latest', 'debounce', 'throttle', 'validate', 'transform', 'process', 'processOptions', 'warnTimeout'];
var allowedProcessOptions = ['dispatchReturn', 'dispatchMultiple', 'successType', 'failType'];
var NODE_ENV = typeof window === 'undefined' && process && process.env && "production" ? "production" : '';
var defaultOptions = {
  warnTimeout: 60000,
  latest: false,
  debounce: 0,
  throttle: 0
};
var globallyConfigurableOptions = ['warnTimeout'];
/**
   Configure the default `createLogic` options. Note that changing these values
   will not affect `Logic` instances that have already been instantiated.

   @param {object}  options object defining default values to be used when creating `Logic`
     instances. The following options may be set globally:
        - warnTimeout

     See the `createLogic` API documentation for a description of these options.

   @returns {undefined}

   @example

   ```
   import { configureLogic, createLogic } from 'redux-logic';

   configureLogic({ warnTimeout: 10000 })

   // These will both timeout after 10 seconds instead of the library default of
   // 1 minute.
   const logicOne = createLogic({
      type: 'ACTION_ONE',
   })
   const logicTwo = createLogic({
      type: 'ACTION_TWO',
   })
   ```
 */

var configureLogic = function configureLogic() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var invalidOptions = getInvalidOptions(options, globallyConfigurableOptions);

  if (invalidOptions.length) {
    throw new Error("".concat(invalidOptions, " are not globally configurable options."));
  }

  Object.keys(options).forEach(function (option) {
    defaultOptions[option] = options[option];
  });
};
/**
   Validate and augment logic object to be used in logicMiddleware.
   The returned object has the same structure as the supplied
   logicOptions argument but it will have been validated and defaults
   will be applied

   @param {object} logicOptions object defining logic operation
   @param {string} logicOptions.name optional string name, defaults
     to generated name from type and idx
   @param {string | regex | function | array} logicOptions.type action
     type(s) that this logic is used for. A string '*' indicates that
     it applies to all types, otherwise strings are used for exact match.
     A regex can also be used to match. If a function is supplied like
     a redux-actions action function, then it will use call its toString()
     method to get the associated action type. An array of any of these
     can be supplied to extend match to more types.
   @param {string | regex | function | array} logicOptions.cancelType
     action type(s) that will cause a cancellation. String, regex, fn,
     array are used similar to how the logicOptions.type works.
     Cancellation will automatically prevent dispatches from being used
     regardless of when the original logic finishes. Additionally a
     cancellation$ observable is available to logic to detect
     cancellation and perform any manual cleanup.
   @param {boolean} logicOptions.latest enables takeLatest which cancels
     previous when a newer one comes in, default false
   @param {number} logicOptions.debounce milliseconds to perform
     debouncing, cannot be used with latest, default 0 (disabled)
   @param {number} logicOptions.throttle milliseconds to perform
     throttling, cannot be used with latest, default 0 (disabled)
   @param {function} logicOptions.validate hook that will be executed
     before an action has been sent to other logic, middleware, and the
     reducers. Must call one of the provided callback functions allow or
     reject with an action to signal completion. Expected to be called
     exactly once. Pass undefined as an object to forward nothing.
     Calling reject prevents process hook from being run. Defaults to
     an identity fn which allows the original action.
   @param {function} logicOptions.transform hook that will be executed
     before an action has been sent to other logic, middleware, and the
     reducers. This is an alias for the validate hook. Call the
     provided callback function `next` (or `reject`) to
     signal completion. Expected to be called exactly once. Pass
     undefined as an object to forward nothing. Defaults to an identity
     transform which forwards the original action.
   @param {function} logicOptions.process hook that will be invoked
     after the original action (or that returned by validate/transform
     step) has been forwarded to other logic, middleware, and reducers.
     This hook will not be run if the validate/transform hook called
     reject. This hook is ideal for any additional processing or async
     fetching. The fn signature is `process(deps, ?dispatch, ?done)`
     where dispatch and done are optional and if included in the
     the signature will change the dispatch mode:
     1. Neither dispatch, nor done - dispatches the returned/resolved val
     2. Only dispatch - single dispatch mode, call dispatch exactly once (deprecated)
     3. Both dispatch and done - multi-dispatch mode, call done when finished
     Dispatch may be called with undefined when nothing needs to be
     dispatched. Multiple dispatches may be made if including the done or
     simply by dispatching an observable.
     More details on dispatching modes are in the advanced API docs
   @param {object} logicOptions.processOptions options influencing
     process hook, default {}
   @param {boolean} logicOptions.processOptions.dispatchReturn dispatch
     the return value or resolved/next promise/observable, default is
     false when dispatch is included in process fn signature
   @param {boolean} logicOptions.processOptions.dispatchMultiple
     multi-dispatch mode is enabled and continues until done is called
     or cancelled. The default is false unless the done cb is included
     in the process fn signature.
   @param {string|function} logicOptions.processOptions.successType
     action type or action creator fn, use value as payload
   @param {string|function} logicOptions.processOptions.failType
     action type or action creator fn, use value as payload
   @param {number} logicOptions.warnTimeout In non-production environment
     a console.error message will be logged if logic doesn't complete
     before this timeout in ms fires. Set to 0 to disable. Defaults to
     60000 (one minute)
   @returns {object} validated logic object which can be used in
     logicMiddleware contains the same properties as logicOptions but
     has defaults applied.
 */

function createLogic() {
  var logicOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var invalidOptions = getInvalidOptions(logicOptions, allowedOptions);

  if (invalidOptions.length) {
    throw new Error("unknown or misspelled option(s): ".concat(invalidOptions));
  }

  var name = logicOptions.name,
      type = logicOptions.type,
      cancelType = logicOptions.cancelType,
      _logicOptions$warnTim = logicOptions.warnTimeout,
      warnTimeout = _logicOptions$warnTim === void 0 ? defaultOptions.warnTimeout : _logicOptions$warnTim,
      _logicOptions$latest = logicOptions.latest,
      latest = _logicOptions$latest === void 0 ? defaultOptions.latest : _logicOptions$latest,
      _logicOptions$debounc = logicOptions.debounce,
      debounce = _logicOptions$debounc === void 0 ? defaultOptions.debounce : _logicOptions$debounc,
      _logicOptions$throttl = logicOptions.throttle,
      throttle = _logicOptions$throttl === void 0 ? defaultOptions.throttle : _logicOptions$throttl,
      validate = logicOptions.validate,
      transform = logicOptions.transform,
      process = logicOptions.process,
      _logicOptions$process = logicOptions.processOptions,
      processOptions = _logicOptions$process === void 0 ? {} : _logicOptions$process;

  if (!type) {
    throw new Error('type is required, use \'*\' to match all actions');
  }

  if (type === 'undefined') {
    throw new Error('type is a string "undefined", check the logicOptions type field for a stringified undefined value');
  }

  if (validate && transform) {
    throw new Error('logic cannot define both the validate and transform hooks they are aliases');
  }

  if (typeof processOptions.warnTimeout !== 'undefined') {
    throw new Error('warnTimeout is a top level createLogic option, not a processOptions option');
  }

  var invalidProcessOptions = getInvalidOptions(processOptions, allowedProcessOptions);

  if (invalidProcessOptions.length) {
    throw new Error("unknown or misspelled processOption(s): ".concat(invalidProcessOptions));
  }

  if (NODE_ENV !== 'production' && typeof processOptions.dispatchMultiple !== 'undefined' && warnTimeout !== 0) {
    // eslint-disable-next-line no-console
    console.error("warning: in logic for type(s): ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* stringifyType */ "c"])(type), " - dispatchMultiple is always true in next version. For non-ending logic, set warnTimeout to 0"));
  }

  var processLength = process ? process.length : 0; // use process fn signature to determine some processOption defaults
  // for dispatchReturn and dispatchMultiple

  switch (processLength) {
    case 0: // process() - dispatchReturn

    case 1:
      // process(deps) - dispatchReturn
      setIfUndefined(processOptions, 'dispatchReturn', true);
      break;

    case 2:
      // process(deps, dispatch) - single dispatch (deprecated)
      if (NODE_ENV !== 'production' && !processOptions.dispatchMultiple && warnTimeout !== 0) {
        // eslint-disable-next-line no-console
        console.error("warning: in logic for type(s): ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* stringifyType */ "c"])(type), " - single-dispatch mode is deprecated, call done when finished dispatching. For non-ending logic, set warnTimeout: 0"));
      } // nothing to do, defaults are fine


      break;

    case 3: // process(deps, dispatch, done) - multi-dispatch

    default:
      // allow for additional params to come later
      setIfUndefined(processOptions, 'dispatchMultiple', true);
      break;
  }

  return {
    name: typeToStrFns(name),
    type: typeToStrFns(type),
    cancelType: typeToStrFns(cancelType),
    latest: latest,
    debounce: debounce,
    throttle: throttle,
    validate: validate,
    transform: transform,
    process: process,
    processOptions: processOptions,
    warnTimeout: warnTimeout
  };
}

function getInvalidOptions(options, validOptions) {
  return Object.keys(options).filter(function (k) {
    return validOptions.indexOf(k) === -1;
  });
}
/* if type is a fn call toString() to get type, redux-actions
  if array, then check members */


function typeToStrFns(type) {
  if (Array.isArray(type)) {
    return type.map(function (x) {
      return typeToStrFns(x);
    });
  }

  return typeof type === 'function' ? type.toString() : type;
}

function setIfUndefined(obj, propName, propValue) {
  if (typeof obj[propName] === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    obj[propName] = propValue;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(72)))

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81)('asyncIterator');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(38);
var redefine = __webpack_require__(34);
var META = __webpack_require__(98).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(62);
var setToStringTag = __webpack_require__(67);
var uid = __webpack_require__(36);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(82);
var wksDefine = __webpack_require__(81);
var enumKeys = __webpack_require__(99);
var isArray = __webpack_require__(100);
var anObject = __webpack_require__(17);
var isObject = __webpack_require__(33);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(61);
var createDesc = __webpack_require__(35);
var _create = __webpack_require__(77);
var gOPNExt = __webpack_require__(101);
var $GOPD = __webpack_require__(102);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(39);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(84).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(69).f = $propertyIsEnumerable;
  __webpack_require__(83).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(43)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js + 2 modules
var Observable = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js + 3 modules
var Subscription = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription_SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription["a" /* Subscription */]));

//# sourceMappingURL=SubjectSubscription.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subject.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Subject_SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject_Subject; });
/* unused harmony export AnonymousSubject */
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var Subject_SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber["a" /* Subscriber */]));

var Subject_Subject = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber["a" /* rxSubscriber */]] = function () {
        return new Subject_SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new Subject_AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription["a" /* Subscription */].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription["a" /* Subscription */].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable["a" /* Observable */]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new Subject_AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable["a" /* Observable */]));

var Subject_AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription["a" /* Subscription */].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject_Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x != null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeTo; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */










var subscribeTo = function (result) {
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"]) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__[/* observable */ "a"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__[/* subscribeToObservable */ "a"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_5__[/* isArrayLike */ "a"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__[/* subscribeToArray */ "a"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_6__[/* isPromise */ "a"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__[/* subscribeToPromise */ "a"])(result);
    }
    else if (result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__[/* iterator */ "a"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__[/* subscribeToIterable */ "a"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__[/* isObject */ "a"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "a"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__[/* hostReportError */ "a"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__[/* iterator */ "a"]]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "a"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMPTY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* unused harmony export emptyScheduled */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__[/* Observable */ "a"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCancelled$; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(114);



var NODE_ENV = typeof window === 'undefined' && process && process.env && "production" ? "production" : ''; // returns { cancelled$, setInterceptComplete }

function createCancelled$(_ref) {
  var action = _ref.action,
      cancel$ = _ref.cancel$,
      monitor$ = _ref.monitor$,
      logic = _ref.logic;
  var name = logic.name; // once action reaches bottom, filtered, nextDisp, or cancelled

  var interceptComplete = false;

  function setInterceptComplete() {
    interceptComplete = true;
  }

  var cancelled$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__[/* Subject */ "a"]().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[/* take */ "a"])(1));

  if (cancel$) {
    cancel$.subscribe(cancelled$); // connect cancelled$ to cancel$

    cancelled$.subscribe(function () {
      if (!interceptComplete) {
        monitor$.next({
          action: action,
          name: name,
          op: 'cancelled'
        });
      } else {
        // marking these different so not counted twice
        monitor$.next({
          action: action,
          name: name,
          op: 'dispCancelled'
        });
      }
    });
  }

  createWarnTimeout({
    logic: logic,
    cancelled$: cancelled$
  });
  return {
    cancelled$: cancelled$,
    setInterceptComplete: setInterceptComplete
  };
}

function createWarnTimeout(_ref2) {
  var logic = _ref2.logic,
      cancelled$ = _ref2.cancelled$;
  var name = logic.name,
      warnTimeout = logic.warnTimeout; // In non-production mode only we will setup a warning timeout that
  // will console.error if logic has not completed by the time it fires
  // warnTimeout can be set to 0 to disable

  if (NODE_ENV !== 'production' && warnTimeout) {
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__[/* timer */ "a"])(warnTimeout).pipe( // take until cancelled, errored, or completed
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[/* takeUntil */ "a"])(cancelled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__[/* defaultIfEmpty */ "a"])(true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__[/* tap */ "a"])(function () {
      // eslint-disable-next-line no-console
      console.error("warning: logic (".concat(name, ") is still running after ").concat(warnTimeout / 1000, "s, forget to call done()? For non-ending logic, set warnTimeout: 0"));
    })).subscribe();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(72)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js + 3 modules
var Subscription = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/Action.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action_Action = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription["a" /* Subscription */]));

//# sourceMappingURL=Action.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncAction_AsyncAction; });
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction_AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_Action));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncScheduler_AsyncScheduler; });
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler_AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(33);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(23);
var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(43) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(62)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(64);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(76);
var $export = __webpack_require__(38);
var toObject = __webpack_require__(68);
var call = __webpack_require__(105);
var isArrayIter = __webpack_require__(106);
var toLength = __webpack_require__(79);
var createProperty = __webpack_require__(107);
var getIterFn = __webpack_require__(108);

$export($export.S + $export.F * !__webpack_require__(110)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(74)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(33);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(17);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(90);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(17);
var dPs = __webpack_require__(92);
var enumBugKeys = __webpack_require__(66);
var IE_PROTO = __webpack_require__(65)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(74)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(95).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(25);
var arrayIndexOf = __webpack_require__(93)(false);
var IE_PROTO = __webpack_require__(65)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(80);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(23);
var LIBRARY = __webpack_require__(43);
var wksExt = __webpack_require__(82);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(78);
var hiddenKeys = __webpack_require__(66).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(9) && /./g.flags != 'g') __webpack_require__(10).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(75)
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(18)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(63);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(43);
var $export = __webpack_require__(38);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(37);
var $iterCreate = __webpack_require__(91);
var setToStringTag = __webpack_require__(67);
var getPrototypeOf = __webpack_require__(96);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(77);
var descriptor = __webpack_require__(35);
var setToStringTag = __webpack_require__(67);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(17);
var getKeys = __webpack_require__(39);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(25);
var toLength = __webpack_require__(79);
var toAbsoluteIndex = __webpack_require__(94);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(80);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(68);
var IE_PROTO = __webpack_require__(65)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(38);
var core = __webpack_require__(23);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(33);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(39);
var gOPS = __webpack_require__(83);
var pIE = __webpack_require__(69);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(63);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(25);
var gOPN = __webpack_require__(84).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(69);
var createDesc = __webpack_require__(35);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(61);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(73);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(104)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(38);
var fails = __webpack_require__(16);
var defined = __webpack_require__(64);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(17);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(37);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(35);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(109);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(37);
module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(63);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/createLogic.js
var createLogic = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subject.js + 1 modules
var Subject = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject_BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError["a" /* ObjectUnsubscribedError */]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject["a" /* Subject */]));

//# sourceMappingURL=BehaviorSubject.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/scan.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = /*@__PURE__*/ (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
            hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new scan_ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var scan_ScanSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=scan.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeWhile.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function takeWhile(predicate) {
    return function (source) { return source.lift(new TakeWhileOperator(predicate)); };
}
var TakeWhileOperator = /*@__PURE__*/ (function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new takeWhile_TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
var takeWhile_TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=takeWhile.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new map_MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var map_MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=map.js.map

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/Immediate.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js + 1 modules
var AsyncAction = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction_AsapAction = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction["a" /* AsyncAction */]));

//# sourceMappingURL=AsapAction.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js + 1 modules
var AsyncScheduler = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler_AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler["a" /* AsyncScheduler */]));

//# sourceMappingURL=AsapScheduler.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/asap.js
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap = /*@__PURE__*/ new AsapScheduler_AsapScheduler(AsapAction_AsapAction);
//# sourceMappingURL=asap.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js + 2 modules
var Observable = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isScheduler.js
var isScheduler = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
var subscribeToResult = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js
var OuterSubscriber = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js
var InnerSubscriber = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isPromise.js
var isPromise = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js
var isArrayLike = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
var symbol_observable = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[symbol_observable["a" /* observable */]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/symbol/iterator.js
var symbol_iterator = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[symbol_iterator["a" /* iterator */]] === 'function';
}
//# sourceMappingURL=isIterable.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js + 3 modules
var Subscription = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
var subscribeToArray = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromArray.js
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable["a" /* Observable */](Object(subscribeToArray["a" /* subscribeToArray */])(input));
    }
    else {
        return new Observable["a" /* Observable */](function (subscriber) {
            var sub = new Subscription["a" /* Subscription */]();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromArray.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
var subscribeToPromise = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromPromise.js
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */



function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable["a" /* Observable */](Object(subscribeToPromise["a" /* subscribeToPromise */])(input));
    }
    else {
        return new Observable["a" /* Observable */](function (subscriber) {
            var sub = new Subscription["a" /* Subscription */]();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                });
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromPromise.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
var subscribeToIterable = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromIterable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */




function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable["a" /* Observable */](Object(subscribeToIterable["a" /* subscribeToIterable */])(input));
    }
    else {
        return new Observable["a" /* Observable */](function (subscriber) {
            var sub = new Subscription["a" /* Subscription */]();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[symbol_iterator["a" /* iterator */]]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromIterable.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
var subscribeToObservable = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromObservable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */




function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable["a" /* Observable */](Object(subscribeToObservable["a" /* subscribeToObservable */])(input));
    }
    else {
        return new Observable["a" /* Observable */](function (subscriber) {
            var sub = new Subscription["a" /* Subscription */]();
            sub.add(scheduler.schedule(function () {
                var observable = input[symbol_observable["a" /* observable */]]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromObservable.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js
var subscribeTo = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/from.js
/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */










function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable["a" /* Observable */]) {
            return input;
        }
        return new Observable["a" /* Observable */](Object(subscribeTo["a" /* subscribeTo */])(input));
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromObservable(input, scheduler);
        }
        else if (Object(isPromise["a" /* isPromise */])(input)) {
            return fromPromise(input, scheduler);
        }
        else if (Object(isArrayLike["a" /* isArrayLike */])(input)) {
            return fromArray(input, scheduler);
        }
        else if (isIterable(input) || typeof input === 'string') {
            return fromIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=from.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new mergeMap_MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var mergeMap_MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new InnerSubscriber["a" /* InnerSubscriber */](this, undefined, undefined);
        this.add(innerSubscriber);
        Object(subscribeToResult["a" /* subscribeToResult */])(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber["a" /* OuterSubscriber */]));

//# sourceMappingURL=mergeMap.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/identity.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/merge.js
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(isScheduler["a" /* isScheduler */])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable["a" /* Observable */]) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/refCount.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new refCount_RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var refCount_RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=refCount.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable_ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription["a" /* Subscription */]();
            connection.add(this.source
                .subscribe(new ConnectableObservable_ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription["a" /* Subscription */].EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount()(this);
    };
    return ConnectableObservable;
}(Observable["a" /* Observable */]));

var connectableProto = ConnectableObservable_ConnectableObservable.prototype;
var connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableObservable_ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject["b" /* SubjectSubscriber */]));
var ConnectableObservable_RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new ConnectableObservable_RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var ConnectableObservable_RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=ConnectableObservable.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/multicast.js
/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */

function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        var connectable = Object.create(source, connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
var MulticastOperator = /*@__PURE__*/ (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());

//# sourceMappingURL=multicast.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/share.js
/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */



function shareSubjectFactory() {
    return new Subject["a" /* Subject */]();
}
function share() {
    return function (source) { return refCount()(multicast(shareSubjectFactory)(source)); };
}
//# sourceMappingURL=share.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/filter.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new filter_FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var filter_FilterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=filter.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/operators/tap.js
var tap = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/debounceTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = scheduler_async["a" /* async */];
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new debounceTime_DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var debounceTime_DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber["a" /* Subscriber */]));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/throttle.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle_throttle(durationSelector, config) {
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
var ThrottleOperator = /*@__PURE__*/ (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new throttle_ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var throttle_ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (duration) {
            this.add(this._throttled = Object(subscribeToResult["a" /* subscribeToResult */])(this, duration));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(OuterSubscriber["a" /* OuterSubscriber */]));
//# sourceMappingURL=throttle.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/throttleTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */




function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = scheduler_async["a" /* async */];
    }
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var ThrottleTimeOperator = /*@__PURE__*/ (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new throttleTime_ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var throttleTime_ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(throttleTime_dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber["a" /* Subscriber */]));
function throttleTime_dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

// EXTERNAL MODULE: ./node_modules/is-promise/index.js
var is_promise = __webpack_require__(71);
var is_promise_default = /*#__PURE__*/__webpack_require__.n(is_promise);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/operators/take.js + 1 modules
var take = __webpack_require__(116);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./src/createDepObject.js




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
// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/throwError.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable["a" /* Observable */](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable["a" /* Observable */](function (subscriber) { return scheduler.schedule(throwError_dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function throwError_dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

// CONCATENATED MODULE: ./src/execProcessFn.js


function execProcessFn(_ref) {
  var depObj = _ref.depObj,
      dispatch = _ref.dispatch,
      dispatch$ = _ref.dispatch$,
      dispatchReturn = _ref.dispatchReturn,
      done = _ref.done,
      name = _ref.name,
      processFn = _ref.processFn;

  try {
    var retValue = processFn(depObj, dispatch, done);

    if (dispatchReturn) {
      // processOption.dispatchReturn true
      // returning undefined won't dispatch
      if (typeof retValue === 'undefined') {
        dispatch$.complete();
      } else {
        // defined return value, dispatch
        dispatch(retValue); // handles observables, promises, ...
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("unhandled exception in logic named: ".concat(name), err); // wrap in observable since might not be an error object

    dispatch(throwError(err));
  }
}
// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObservable.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof Observable["a" /* Observable */] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/observable/empty.js
var empty = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/scalar.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function scalar(value) {
    var result = new Observable["a" /* Observable */](function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/of.js
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */




function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(isScheduler["a" /* isScheduler */])(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return Object(empty["a" /* empty */])(scheduler);
        case 1:
            return scheduler ? fromArray(args, scheduler) : scalar(args[0]);
        default:
            return fromArray(args, scheduler);
    }
}
//# sourceMappingURL=of.js.map

// CONCATENATED MODULE: ./src/createDispatch.js









function createDispatch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createDispatch_defineProperty(target, key, source[key]); }); } return target; }

function createDispatch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var UNHANDLED_LOGIC_ERROR = 'UNHANDLED_LOGIC_ERROR'; // returns { dispatch, dispatch$, done };

function createDispatch(_ref) {
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
  var dispatchOps = [mergeAll(), cancel$ ? Object(takeUntil["a" /* takeUntil */])(cancel$) : null, // only takeUntil if cancel or latest
  Object(tap["a" /* tap */])(mapToActionAndDispatch, // next
  mapErrorToActionAndDispatch // error
  )].filter(utils["a" /* identityFn */]);
  var dispatch$ = new Subject["a" /* Subject */]();
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
    var act = Object(utils["b" /* isInterceptAction */])(actionOrValue) ? Object(utils["d" /* unwrapInterceptAction */])(actionOrValue) : successType ? mapToAction(successType, actionOrValue, false) : actionOrValue;

    if (act) {
      storeDispatch(act);
    }
  }
  /* eslint-disable consistent-return */


  function mapErrorToActionAndDispatch(actionOrValue) {
    // action dispatched from intercept needs to be unwrapped and sent as is

    /* istanbul ignore if  */
    if (Object(utils["b" /* isInterceptAction */])(actionOrValue)) {
      var interceptAction = Object(utils["d" /* unwrapInterceptAction */])(actionOrValue);
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
      isObservable(act) ? act : is_promise_default()(act) ? from(act) : act instanceof Error ? throwError(act) : of(act));
    }

    if (!(dispatchMultiple || allowMore)) {
      dispatch$.complete();
    }

    return act;
  }

  function applyDispatchDefaults(options) {
    return createDispatch_objectSpread({}, DispatchDefaults, options);
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
// EXTERNAL MODULE: ./src/createCancelled$.js
var createCancelled$ = __webpack_require__(58);

// CONCATENATED MODULE: ./src/createLogicAction$.js









function createLogicAction$_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createLogicAction$_defineProperty(target, key, source[key]); }); } return target; }

function createLogicAction$_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createLogicAction$_toConsumableArray(arr) { return createLogicAction$_arrayWithoutHoles(arr) || createLogicAction$_iterableToArray(arr) || createLogicAction$_nonIterableSpread(); }

function createLogicAction$_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function createLogicAction$_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function createLogicAction$_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }










var debug = function debug()
/* ...args */
{};

function createLogicAction$(_ref) {
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

  var logicActionOps = [cancel$ ? Object(takeUntil["a" /* takeUntil */])(cancel$) : null, // only takeUntil if cancel or latest
  Object(take["a" /* take */])(1)].filter(utils["a" /* identityFn */]); // logicAction$ is used for the mw next(action) call

  var logicAction$ = (_Observable$create = Observable["a" /* Observable */].create(function (logicActionObs) {
    // create notification subject for process which we dispose of
    // when take(1) or when we are done dispatching
    var _createCancelled$ = Object(createCancelled$["a" /* default */])({
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
      return createLogicAction$_objectSpread({}, AllowRejectNextDefaults, options);
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
        dispatch(Object(utils["e" /* wrapActionForIntercept */])(act), {
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
  })).pipe.apply(_Observable$create, createLogicAction$_toConsumableArray(logicActionOps)); // take, takeUntil


  return logicAction$;
}
// CONCATENATED MODULE: ./src/logicWrapper.js







function logicWrapper_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { logicWrapper_typeof = function _typeof(obj) { return typeof obj; }; } else { logicWrapper_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return logicWrapper_typeof(obj); }

function logicWrapper_toConsumableArray(arr) { return logicWrapper_arrayWithoutHoles(arr) || logicWrapper_iterableToArray(arr) || logicWrapper_nonIterableSpread(); }

function logicWrapper_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function logicWrapper_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function logicWrapper_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }









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
    }) : Object(tap["a" /* tap */])(function (action) {
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

      var _createCancelled$ = Object(createCancelled$["a" /* default */])({
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
      asap.schedule(function () {
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
    }), debounce ? debounceTime(debounce) : null, throttle ? throttleTime(throttle) : null, mergeMapOrTap].filter(utils["a" /* identityFn */]);
    var matchingAction$ = action$.pipe.apply(action$, logicWrapper_toConsumableArray(matchingOps)); // shortcut optimization
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


  if (logicWrapper_typeof(tStrArrRe) === 'symbol') {
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
// CONCATENATED MODULE: ./src/createLogicMiddleware.js








function createLogicMiddleware_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { createLogicMiddleware_typeof = function _typeof(obj) { return typeof obj; }; } else { createLogicMiddleware_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return createLogicMiddleware_typeof(obj); }

function createLogicMiddleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createLogicMiddleware_defineProperty(target, key, source[key]); }); } return target; }

function createLogicMiddleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var createLogicMiddleware_debug = function debug()
/* ...args */
{};

var OP_INIT = 'init'; // initial monitor op before anything else

/**
   Builds a redux middleware for handling logic (created with
   createLogic). It also provides a way to inject runtime dependencies
   that will be provided to the logic for use during its execution hooks.

   This middleware has two additional methods:
     - `addLogic(arrLogic)` adds additional logic dynamically
     - `replaceLogic(arrLogic)` replaces all logic, existing logic should still complete

   @param {array} arrLogic array of logic items (each created with
     createLogic) used in the middleware. The order in the array
     indicates the order they will be called in the middleware.
   @param {object} deps optional runtime dependencies that will be
     injected into the logic hooks. Anything from config to instances
     of objects or connections can be provided here. This can simply
     testing. Reserved property names: getState, action, and ctx.
   @returns {function} redux middleware with additional methods
     addLogic and replaceLogic
 */

function createLogicMiddleware() {
  var arrLogic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Array.isArray(arrLogic)) {
    throw new Error('createLogicMiddleware needs to be called with an array of logic items');
  }

  var duplicateLogic = findDuplicates(arrLogic);

  if (duplicateLogic.length) {
    throw new Error("duplicate logic, indexes: ".concat(duplicateLogic));
  }

  var actionSrc$ = new Subject["a" /* Subject */](); // mw action stream

  var monitor$ = new Subject["a" /* Subject */](); // monitor all activity

  var lastPending$ = new BehaviorSubject_BehaviorSubject({
    op: OP_INIT
  });
  monitor$.pipe(scan(function (acc, x) {
    // append a pending logic count
    var pending = acc.pending || 0;

    switch (x.op) {
      // eslint-disable-line default-case
      case 'top': // action at top of logic stack

      case 'begin':
        // starting into a logic
        pending += 1;
        break;

      case 'end': // completed from a logic

      case 'bottom': // action cleared bottom of logic stack

      case 'nextDisp': // action changed type and dispatched

      case 'filtered': // action filtered

      case 'dispatchError': // error when dispatching

      case 'cancelled':
        // action cancelled before intercept complete
        // dispCancelled is not included here since
        // already accounted for in the 'end' op
        pending -= 1;
        break;
    }

    return createLogicMiddleware_objectSpread({}, x, {
      pending: pending
    });
  }, {
    pending: 0
  })).subscribe(lastPending$); // pipe to lastPending

  var savedStore;
  var savedNext;
  var actionEnd$;
  var logicSub;
  var logicCount = 0; // used for implicit naming

  var savedLogicArr = arrLogic; // keep for uniqueness check

  function mw(store) {
    if (savedStore && savedStore !== store) {
      throw new Error('cannot assign logicMiddleware instance to multiple stores, create separate instance for each');
    }

    savedStore = store;
    return function (next) {
      savedNext = next;

      var _applyLogic = applyLogic(arrLogic, savedStore, savedNext, logicSub, actionSrc$, deps, logicCount, monitor$),
          action$ = _applyLogic.action$,
          sub = _applyLogic.sub,
          cnt = _applyLogic.logicCount;

      actionEnd$ = action$;
      logicSub = sub;
      logicCount = cnt;
      return function (action) {
        createLogicMiddleware_debug('starting off', action);
        monitor$.next({
          action: action,
          op: 'top'
        });
        actionSrc$.next(action);
        return action;
      };
    };
  }
  /**
    observable to monitor flow in logic
    */


  mw.monitor$ = monitor$;
  /**
     Resolve promise when all in-flight actions are complete passing
     through fn if provided
     @param {function} fn optional fn() which is invoked on completion
     @return {promise} promise resolves when all are complete
    */

  mw.whenComplete = function whenComplete() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : utils["a" /* identityFn */];
    return lastPending$.pipe( // tap(x => console.log('wc', x)), /* keep commented out */
    takeWhile(function (x) {
      return x.pending;
    }), map(function () {
      return (
        /* x */
        undefined
      );
    }) // not passing along anything
    ).toPromise().then(fn);
  };
  /**
     add additional deps after createStore has been run. Useful for
     dynamically injecting dependencies for the hooks. Throws an error
     if it tries to override an existing dependency with a new
     value or instance.
     @param {object} additionalDeps object of dependencies to add
     @return {undefined}
    */


  mw.addDeps = function addDeps(additionalDeps) {
    if (createLogicMiddleware_typeof(additionalDeps) !== 'object') {
      throw new Error('addDeps should be called with an object');
    }

    Object.keys(additionalDeps).forEach(function (k) {
      var existing = deps[k];
      var newValue = additionalDeps[k];

      if (typeof existing !== 'undefined' && // previously existing dep
      existing !== newValue) {
        // no override
        throw new Error("addDeps cannot override an existing dep value: ".concat(k));
      } // eslint-disable-next-line no-param-reassign


      deps[k] = newValue;
    });
  };
  /**
    add logic after createStore has been run. Useful for dynamically
    loading bundles at runtime. Existing state in logic is preserved.
    @param {array} arrNewLogic array of logic items to add
    @return {object} object with a property logicCount set to the count of logic items
   */


  mw.addLogic = function addLogic(arrNewLogic) {
    if (!arrNewLogic.length) {
      return {
        logicCount: logicCount
      };
    }

    var combinedLogic = savedLogicArr.concat(arrNewLogic);
    var duplicateLogic = findDuplicates(combinedLogic);

    if (duplicateLogic.length) {
      throw new Error("duplicate logic, indexes: ".concat(duplicateLogic));
    }

    var _applyLogic2 = applyLogic(arrNewLogic, savedStore, savedNext, logicSub, actionEnd$, deps, logicCount, monitor$),
        action$ = _applyLogic2.action$,
        sub = _applyLogic2.sub,
        cnt = _applyLogic2.logicCount;

    actionEnd$ = action$;
    logicSub = sub;
    logicCount = cnt;
    savedLogicArr = combinedLogic;
    createLogicMiddleware_debug('added logic');
    return {
      logicCount: cnt
    };
  };

  mw.mergeNewLogic = function mergeNewLogic(arrMergeLogic) {
    // check for duplicates within the arrMergeLogic first
    var duplicateLogic = findDuplicates(arrMergeLogic);

    if (duplicateLogic.length) {
      throw new Error("duplicate logic, indexes: ".concat(duplicateLogic));
    } // filter out any refs that match existing logic, then addLogic


    var arrNewLogic = arrMergeLogic.filter(function (x) {
      return savedLogicArr.indexOf(x) === -1;
    });
    return mw.addLogic(arrNewLogic);
  };
  /**
   replace all existing logic with a new array of logic.
   In-flight requests should complete. Logic state will be reset.
   @param {array} arrRepLogic array of replacement logic items
   @return {object} object with a property logicCount set to the count of logic items
   */


  mw.replaceLogic = function replaceLogic(arrRepLogic) {
    var duplicateLogic = findDuplicates(arrRepLogic);

    if (duplicateLogic.length) {
      throw new Error("duplicate logic, indexes: ".concat(duplicateLogic));
    }

    var _applyLogic3 = applyLogic(arrRepLogic, savedStore, savedNext, logicSub, actionSrc$, deps, 0, monitor$),
        action$ = _applyLogic3.action$,
        sub = _applyLogic3.sub,
        cnt = _applyLogic3.logicCount;

    actionEnd$ = action$;
    logicSub = sub;
    logicCount = cnt;
    savedLogicArr = arrRepLogic;
    createLogicMiddleware_debug('replaced logic');
    return {
      logicCount: cnt
    };
  };

  return mw;
}

function applyLogic(arrLogic, store, next, sub, actionIn$, deps, startLogicCount, monitor$) {
  if (!store || !next) {
    throw new Error('store is not defined');
  }

  if (sub) {
    sub.unsubscribe();
  }

  var wrappedLogic = arrLogic.map(function (logic, idx) {
    var namedLogic = naming(logic, idx + startLogicCount);
    return logicWrapper(namedLogic, store, deps, monitor$);
  });
  var actionOut$ = wrappedLogic.reduce(function (acc$, wep) {
    return wep(acc$);
  }, actionIn$);
  var newSub = actionOut$.subscribe(function (action) {
    createLogicMiddleware_debug('actionEnd$', action);

    try {
      var result = next(action);
      createLogicMiddleware_debug('result', result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('error in mw dispatch or next call, probably in middlware/reducer/render fn:', err);
      var msg = err && err.message ? err.message : err;
      monitor$.next({
        action: action,
        err: msg,
        op: 'nextError'
      });
    } // at this point, action is the transformed action, not original


    monitor$.next({
      nextAction: action,
      op: 'bottom'
    });
  });
  return {
    action$: actionOut$,
    sub: newSub,
    logicCount: startLogicCount + arrLogic.length
  };
}
/**
 * Implement default names for logic using type and idx
 * @param {object} logic named or unnamed logic object
 * @param {number} idx  index in the logic array
 * @return {object} namedLogic named logic
 */


function naming(logic, idx) {
  if (logic.name) {
    return logic;
  }

  return createLogicMiddleware_objectSpread({}, logic, {
    name: "L(".concat(Object(utils["c" /* stringifyType */])(logic.type), ")-").concat(idx)
  });
}
/**
  Find duplicates in arrLogic by checking if ref to same logic object
  @param {array} arrLogic array of logic to check
  @return {array} array of indexes to duplicates, empty array if none
 */


function findDuplicates(arrLogic) {
  return arrLogic.reduce(function (acc, x1, idx1) {
    if (arrLogic.some(function (x2, idx2) {
      return idx1 !== idx2 && x1 === x2;
    })) {
      acc.push(idx1);
    }

    return acc;
  }, []);
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport configureLogic */__webpack_require__.d(__webpack_exports__, "configureLogic", function() { return createLogic["a" /* configureLogic */]; });
/* concated harmony reexport createLogic */__webpack_require__.d(__webpack_exports__, "createLogic", function() { return createLogic["b" /* default */]; });
/* concated harmony reexport createLogicMiddleware */__webpack_require__.d(__webpack_exports__, "createLogicMiddleware", function() { return createLogicMiddleware; });



/* harmony default export */ var src = __webpack_exports__["default"] = ({
  configureLogic: createLogic["a" /* configureLogic */],
  createLogic: createLogic["b" /* default */],
  createLogicMiddleware: createLogicMiddleware
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeUntil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
var TakeUntilOperator = /*@__PURE__*/ (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__[/* subscribeToResult */ "a"])(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__[/* OuterSubscriber */ "a"]));
//# sourceMappingURL=takeUntil.js.map


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultIfEmpty; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "a"]));
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */




function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
var TapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "a"](TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        _this._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        _this._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        _this._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        _this._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ "a"])(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
            _this._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
            _this._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"];
        }
        return _this;
    }
    TapSubscriber.prototype._next = function (value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function (err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function () {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__[/* Subscriber */ "a"]));
//# sourceMappingURL=tap.js.map


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js + 2 modules
var Observable = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isNumeric.js
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(isArray["a" /* isArray */])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/util/isScheduler.js
var isScheduler = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/timer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timer; });
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(isScheduler["a" /* isScheduler */])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(isScheduler["a" /* isScheduler */])(scheduler)) {
        scheduler = scheduler_async["a" /* async */];
    }
    return new Observable["a" /* Observable */](function (subscriber) {
        var due = isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/observable/empty.js
var empty = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/take.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return take; });
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */




function take(count) {
    return function (source) {
        if (count === 0) {
            return Object(empty["a" /* empty */])();
        }
        else {
            return source.lift(new take_TakeOperator(count));
        }
    };
}
var take_TakeOperator = /*@__PURE__*/ (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new take_TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
var take_TakeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_es6["a" /* __extends */](TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber["a" /* Subscriber */]));
//# sourceMappingURL=take.js.map


/***/ })
/******/ ]);
});