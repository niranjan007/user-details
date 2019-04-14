import { Action } from '@ngrx/store';
import { User } from '../models/user.entity';
import * as  fromUsers from './users.actions';

export interface UserState {
  users: Array<User>;
  loaded: boolean;
}

export const initialState: UserState = {
  users: [],
  loaded: false
};

export function userReducer(state = initialState, action: fromUsers.UsersActions): UserState {
  switch (action.type) {

    case fromUsers.UsersActionTypes.ADD_USER:
      return {
        ...state, users: [...state.users, action.payload]
      };

    case fromUsers.UsersActionTypes.ADD_USER_SUCCESS:
      return null;

    case fromUsers.UsersActionTypes.ADD_USER_FAIL:
      return null;

    case fromUsers.UsersActionTypes.DELETE_USER:
      return { ...state, ...state.users.filter(user => user.id != action.payload) }

    case fromUsers.UsersActionTypes.LOAD_USERS:
      return null;

    case fromUsers.UsersActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };

    case fromUsers.UsersActionTypes.LOAD_USERS_FAIL:
      return null;

    default:
      return state;
  }
}
