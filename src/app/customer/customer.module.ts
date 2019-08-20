import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { AppMaterialModule } from './../app-material.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDataComponent } from './customer-details/customer-data/customer-data.component';
import { ComicDataComponent } from './customer-details/comic-data/comic-data.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerDetailsComponent, CustomerDataComponent, ComicDataComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppMaterialModule
  ]
})
export class CustomerModule { }
