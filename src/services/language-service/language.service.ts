import { EventEmitter, Injectable, Output } from '@angular/core';
import config from '../../config'
import { Observable, of } from 'rxjs';
import { TokenService } from '../token-service/token.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorBannerComponent } from 'src/app/error-banner/error-banner.component';
import { ErrorHandlingService } from '../error-handling-service/error-handling.service';

interface keyable {
  [key: string]: any
}
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  @Output() getLanguageInfo: EventEmitter<any> = new EventEmitter;
  @Output() getHeadInfo: EventEmitter<any> = new EventEmitter;
  @Output() getAnswerInfo: EventEmitter<any> = new EventEmitter;
  language: any = null;
  answer: any = {};

  private url = `${config.API_ENDPOINT}/language`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${this.tokenService.getAuthToken()}`
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.errorHandling.logError(error.error)
      return of(result as T);
    }
  }

  // , this.httpOptions

  getWords(): Observable<keyable> {
    return this.http.get<keyable>(this.url)
    .pipe(
      tap((res) => {
        this.language = res;
        this.getLanguageInfo.emit(res);
       }),
      catchError(this.handleError<any>('get words'))
      )
  }

  getHead(): Observable<keyable> {
    return this.http.get<keyable>(`${this.url}/head`, this.httpOptions)
    .pipe(
      tap((res) => {
        this.getHeadInfo.emit(res);
       }),
      catchError(this.handleError<any>('get head'))
      )
  }

  postGuess(guess: {guess: string}): Observable<keyable> {
    return this.http.post<keyable>(`${this.url}/guess`, guess, this.httpOptions)
    .pipe(
      tap((res) => {
        this.getAnswerInfo.emit(res);
        this.answer = res;
       }),
      catchError(this.handleError<any>('get head'))
      )
  }

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private errorHandling: ErrorHandlingService
    ) { }
}
