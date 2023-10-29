import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAuthPayload } from '../interfaces/user';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public login(payload: IAuthPayload): Observable<string> {
    return this.httpClient
      .post<string>('/auth/login', payload)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getLoginInformation(): Observable<IAuthPayload> {
    return this.httpClient
      .get<IAuthPayload>('/auth/login')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
