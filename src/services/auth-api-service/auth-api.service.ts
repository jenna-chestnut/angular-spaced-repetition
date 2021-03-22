import { Injectable } from '@angular/core';
import config from '../../config'
import { Observable, of } from 'rxjs';
import { TokenService } from '../token-service/token.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private url = config.API_ENDPOINT;

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

  postLogin(user: {user_name: string, password: string}):  Observable<object> {
    return this.http.post(this.url, user, this.httpOptions)
    .pipe(
      tap((bearerToken) => console.log(`bearer token added: ${bearerToken}`)),
      catchError((err) => this.handleError(err))
    )
  }
 
  constructor(
    private tokenService: TokenService,
    private http: HttpClient
    ) { }
}
