import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Router import from angular core
import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DebounceConceptComponent } from '../../debounce-concept/debounce-concept.component';
import { ThrottlingConceptComponent } from '../../throttling-concept/throttling-concept.component';
import { ContactComponent } from '../../contact/contact.component'
const routes :Routes = [
  {path:'debounce', component:DebounceConceptComponent},
  {path:'throttling', component:ThrottlingConceptComponent},
  {path:'rohit', component:ContactComponent},
  {path : 'dashboard', data : {bradcrumb : 'Dashboard' }, component : DashboardComponent},
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'}

];

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ],
  declarations: [],
})



export class MainRoutingModule { }
