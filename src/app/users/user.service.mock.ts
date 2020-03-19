import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable()
export class UserServiceMock {

  fetchUsers(): Observable<User[]> {
    return of([]);
  }

  handleErrors() {
    return of({});
  }
}
