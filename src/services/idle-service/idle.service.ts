import { Injectable } from '@angular/core';

let _timeoutId: any;
let _idleCallback: any = null
let _notIdleEvents = [
  'mousedown',
  'mousemove',
  'keypress',
  'scroll',
  'touchstart',
]
const _FIVE_MINUTES_IN_MS = 60 * 1000

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  setIdleCallback(idleCallback: any) {
    _idleCallback = idleCallback
  }

  resetIdleTimer(ev: any) {
    clearTimeout(_timeoutId)
    _timeoutId = setTimeout(_idleCallback, _FIVE_MINUTES_IN_MS)
  }

  registerIdleTimerResets() {
    _notIdleEvents.forEach(event =>
      document.addEventListener(
        event,
        this.resetIdleTimer,
        true
      )
    )
  }

  unRegisterIdleResets() {
    clearTimeout(_timeoutId)
    _notIdleEvents.forEach(event =>
      document.removeEventListener(
        event,
        this.resetIdleTimer,
        true
      )
    )
  }

  constructor() { }
}
