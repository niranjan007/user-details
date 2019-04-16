import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersService } from '../users.service';
import { UsersActionTypes, LoadUsersSuccess, AddUser, AddUserSuccess } from './users.actions';
import { mergeMap, map, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/user.entity';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromUsers from '../store/users.actions';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private usersService: UsersService) { }

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.LOAD_USERS),
    mergeMap(action => this.usersService.displayAllUsers().pipe(
      map((users: User[]) => new LoadUsersSuccess(users))
    )
    )
  );

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType(UsersActionTypes.ADD_USER),
    mergeMap((action: fromUsers.AddUser) => this.usersService.addUser(action.payload).pipe(
      map((user: User) => new AddUserSuccess(user))
    )
    )
  );
} 