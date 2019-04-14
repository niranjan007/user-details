import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/"

  addUser(user: User) {
    this.http.post(this.url + "user", user);
  }

  deleteUser(id: number) {
    this.http.delete(this.url + "user/" + id);
  }

  updateUser(user: User) {
    this.http.put(this.url + "user", user);
  }

  displayUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + "user/" + id);
  }

  displayAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url + "users");
  }
}
