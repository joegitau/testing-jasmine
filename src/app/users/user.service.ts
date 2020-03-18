import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<User[]>(this.BASE_URL)
      .pipe(
        catchError(this.handleErrors)
      );
  }

  handleErrors(err: HttpErrorResponse) {
    return throwError(err);
  }
}
