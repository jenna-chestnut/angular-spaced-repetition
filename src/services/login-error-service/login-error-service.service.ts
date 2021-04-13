import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginErrorService {
  @Output() loginError: EventEmitter<any> = new EventEmitter;

  logError(s: string) {
    this.loginError.emit(s);
  }

  constructor() { }
}
