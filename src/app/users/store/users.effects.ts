import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersService } from '../users.service';
import { UsersActionTypes, LoadUsersSuccess } from './users.actions';
import { mergeMap, map } from 'rxjs/operators';
import { User } from '../models/user.entity';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private usersService: UsersService) { }

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.LOAD_USERS),
    mergeMap(action => this.usersService.displayAllUsers().pipe(
      map((users: User[]) => (new LoadUsersSuccess(users)))
    )
    )
  );
}
