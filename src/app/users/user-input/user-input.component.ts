import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  constructor() { }
  user: User = {
    id: 0,
    fname: "Niranjan",
    lname: "Murthy",
    city: "Sydney"
  }

  @Output()
  userInput = new EventEmitter<User>();
  ngOnInit() {
  }

  addUser() {
    this.userInput.emit(this.user);
  }

}
