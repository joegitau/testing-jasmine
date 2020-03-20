import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User;
  sub$: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.sub$ = this.userService.fetchUser(id).subscribe(user => this.user = user);
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
