import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { AppMaterialModule } from './../app-material.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDataComponent } from './customer-details/customer-data/customer-data.component';
import { ComicDataComponent } from './customer-details/comic-data/comic-data.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CustomerListComponent, CustomerDetailsComponent, CustomerDataComponent, ComicDataComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class CustomerModule { }
