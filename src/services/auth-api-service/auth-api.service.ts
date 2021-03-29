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
export class AuthApiService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter;
  user = this.tokenService.parseAuthToken();
  username: keyable = this.user ? this.user.name : null;

  private url = `${config.API_ENDPOINT}/auth/token`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  postLogin(user: {user_name: string, password: string}):  Observable<keyable> {
    return this.http.post<keyable>(this.url, user, this.httpOptions)
    .pipe(
      tap((res) => {
        this.tokenService.saveAuthToken(res.authToken);
        let user = this.tokenService.parseAuthToken();
        this.getLoggedInName.emit(user.name)
      }),
      catchError(this.handleError<any>('login'))
    )
  }

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
    ) { }
}
