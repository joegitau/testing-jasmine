import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fecth users from the API via GET method', () => {
    const mockUsers: User[] = [
      {id: 1, name: 'Joe', username: 'kajoe', email: 'joe@karanja.com'},
      {id: 2, name: 'Mason', username: 'Messy', email: 'mason@karanja.com'}
    ];

    service.fetchUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);

      const req = httpMock.expectOne(service.BASE_URL);
      expect(req.request.method).toBe('GET');

      req.flush(mockUsers);
    });
  });
});
