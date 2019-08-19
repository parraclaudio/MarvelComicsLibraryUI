import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { AppMaterialModule } from './../app-material.module';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppMaterialModule
  ]
})
export class CustomerModule { }
