import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmListComponent } from './components/alarm-list/alarm-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'alarm-list' },
  { path: 'alarm-list', component: AlarmListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }