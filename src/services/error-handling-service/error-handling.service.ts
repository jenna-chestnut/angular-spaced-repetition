import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  @Output() error: EventEmitter<any> = new EventEmitter;

  logError(e: string) {
    this.error.emit(e);
  }

  clearError() {
    this.error.emit('');
  }

  constructor() { }
}

