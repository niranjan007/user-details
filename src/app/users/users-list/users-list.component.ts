import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  users$: Observable<User[]>;

  constructor() { }

  ngOnInit() {
  }
}
