import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserDetailsComponent, UserInputComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('users', fromUsers.userReducer),
    EffectsModule.forFeature([UsersEffects]),
  ]
})
export class UserModule { }
