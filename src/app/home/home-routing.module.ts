import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

 const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
