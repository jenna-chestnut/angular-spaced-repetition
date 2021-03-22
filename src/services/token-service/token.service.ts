import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import config from '../../config';

let _timeoutId: any;
const _TEN_SECONDS_IN_MS = 10000;

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  saveAuthToken(token: string) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  }
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  }
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  }
  hasAuthToken() {
    return !!this.getAuthToken()
  }
  parseJwt(jwt: string) {
    return jwtDecode(jwt)
  }
  parseAuthToken() :any {
    const authToken = this.getAuthToken()
    if (authToken)
      return this.parseJwt(authToken)
    else
      return undefined
  }
  _getMsUntilExpiry(payload: { exp: number }) {
    return (payload.exp * 1000) - Date.now()
  }
  queueCallbackBeforeExpiry(callback: () => void) {
    const msUntilExpiry = this._getMsUntilExpiry(
      this.parseAuthToken()
    )
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
  }
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId)
  }

  constructor() {}
}
