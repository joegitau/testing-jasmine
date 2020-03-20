import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<User[]>(this.BASE_URL)
      .pipe(
        catchError(this.handleErrors)
      );
  }

  fetchUser(id: number) {
    return this.fetchUsers().pipe(
      map(users => users.find(u => u.id === id))
    )
  }

  handleErrors(err: HttpErrorResponse) {
    return throwError(err);
  }
}
