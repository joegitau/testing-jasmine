import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();

    this.users$.subscribe(
      users => console.log(users),
      error => console.log('Something went rogue', error)
      );
  }

}
