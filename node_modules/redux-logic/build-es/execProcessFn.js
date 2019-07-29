import "core-js/modules/es6.function.name";
import { throwError } from 'rxjs';
export default function execProcessFn(_ref) {
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