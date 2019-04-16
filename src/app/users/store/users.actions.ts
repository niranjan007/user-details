import { Action } from '@ngrx/store';
import { User } from '../models/user.entity';

export enum UsersActionTypes {
  ADD_USER = '[USER] Add user',
  ADD_USER_SUCCESS = '[USER] Add user success',
  ADD_USER_FAIL = '[USER] Add user fail',
  DELETE_USER = '[USER] Delete user',
  DELETE_USER_SUCCESS = '[USER] Delete user success',
  DELETE_USER_FAIL = '[USER] Delete user fail',
  LOAD_USERS = '[USER] Load users',
  LOAD_USERS_SUCCESS = '[USER] Load users success',
  LOAD_USERS_FAIL = '[USER] Load users fail',
}

export class AddUser implements Action {
  readonly type = UsersActionTypes.ADD_USER;
  constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
  readonly type = UsersActionTypes.ADD_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class AddUserFail implements Action {
  readonly type = UsersActionTypes.ADD_USER_FAIL;
  constructor(public payload: boolean) { }
}

export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DELETE_USER;
  constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersActionTypes.DELETE_USER_SUCCESS;
}

export class DeleteUserFail implements Action {
  readonly type = UsersActionTypes.DELETE_USER_FAIL;
  constructor(public payload: string) { }
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAIL;
  constructor(public payload: boolean) { }
}

export type UsersActions = AddUser
  | AddUserSuccess
  | AddUserFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail;
