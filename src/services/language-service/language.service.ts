import { EventEmitter, Injectable, Output } from '@angular/core';
import config from '../../config'
import { Observable, of } from 'rxjs';
import { TokenService } from '../token-service/token.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

interface keyable {
  [key: string]: any
}
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  @Output() getLanguageInfo: EventEmitter<any> = new EventEmitter;
  language: any = null;

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
      return of(result as T);
    }
  }

  getWords(): Observable<keyable> {
    return this.http.get<keyable>(this.url, this.httpOptions)
    .pipe(
      tap((res) => {
        this.language = res;
        this.getLanguageInfo.emit(res);
       }),
      catchError(this.handleError<any>('get words'))
      )
  }

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
    ) { }
}
