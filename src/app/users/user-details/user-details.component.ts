import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.entity';
import { Store, select } from '@ngrx/store';
import { AddUser, LoadUsers } from '../store/users.actions';
import { Observable } from 'rxjs';
import * as fromUsers from '../store/users.reducer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = {
    id: 0,
    fname: "Niranjan",
    lname: "Murthy",
    city: "Sydney"
  };

  users$: Observable<User[]>;

  constructor(private store: Store<fromUsers.UserState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users$ = this.store.pipe(select(fromUsers.getAllUsers));
  }

  recieveUser($event: User) {
    this.user = $event;
    this.store.dispatch(new AddUser(this.user));
  }

}
