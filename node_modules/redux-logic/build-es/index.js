import createLogic, { configureLogic } from './createLogic';
import createLogicMiddleware from './createLogicMiddleware';
export { configureLogic, createLogic, createLogicMiddleware };
export default {
  configureLogic: configureLogic,
  createLogic: createLogic,
  createLogicMiddleware: createLogicMiddleware
};