import "core-js/modules/es6.function.name";
import { Subject, timer } from 'rxjs';
import { defaultIfEmpty, tap, take, takeUntil } from 'rxjs/operators';
var NODE_ENV = typeof window === 'undefined' && process && process.env && process.env.NODE_ENV ? process.env.NODE_ENV : ''; // returns { cancelled$, setInterceptComplete }

export default function createCancelled$(_ref) {
  var action = _ref.action,
      cancel$ = _ref.cancel$,
      monitor$ = _ref.monitor$,
      logic = _ref.logic;
  var name = logic.name; // once action reaches bottom, filtered, nextDisp, or cancelled

  var interceptComplete = false;

  function setInterceptComplete() {
    interceptComplete = true;
  }

  var cancelled$ = new Subject().pipe(take(1));

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
    timer(warnTimeout).pipe( // take until cancelled, errored, or completed
    takeUntil(cancelled$.pipe(defaultIfEmpty(true))), tap(function () {
      // eslint-disable-next-line no-console
      console.error("warning: logic (".concat(name, ") is still running after ").concat(warnTimeout / 1000, "s, forget to call done()? For non-ending logic, set warnTimeout: 0"));
    })).subscribe();
  }
}