import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'details/:key', component: CustomerDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomerRoutingModule { }