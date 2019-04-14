import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.entity';
import { Store } from '@ngrx/store';
import { AddUser } from '../store/users.actions';

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

  constructor(private store : Store<User>) { }

  ngOnInit() {
  }

  recieveUser($event: User) {
    this.user = $event;
    this.store.dispatch(new AddUser(this.user));
  }

}
