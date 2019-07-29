"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createLogic", {
  enumerable: true,
  get: function get() {
    return _createLogic.default;
  }
});
Object.defineProperty(exports, "configureLogic", {
  enumerable: true,
  get: function get() {
    return _createLogic.configureLogic;
  }
});
Object.defineProperty(exports, "createLogicMiddleware", {
  enumerable: true,
  get: function get() {
    return _createLogicMiddleware.default;
  }
});
exports.default = void 0;

var _createLogic = _interopRequireWildcard(require("./createLogic"));

var _createLogicMiddleware = _interopRequireDefault(require("./createLogicMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  configureLogic: _createLogic.configureLogic,
  createLogic: _createLogic.default,
  createLogicMiddleware: _createLogicMiddleware.default
};
exports.default = _default;