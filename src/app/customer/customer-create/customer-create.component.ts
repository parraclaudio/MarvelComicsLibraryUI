import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'src/app/shared/repository.service';
import { CustomerForCreation } from 'src/app/_interface/CustomerForCreation.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public customerForm: FormGroup;

  constructor(private location: Location, private repository: RepositoryService) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      telephone: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createCustomer = (customerFormValue) => {
    if (this.customerForm.valid) {
      this.executeCustomerCreation(customerFormValue);
    }
  } 
  private executeCustomerCreation = (customerFormValue) => {
    let customer: CustomerForCreation = {
      Name: customerFormValue.name,
      Email: customerFormValue.email,
      Cpf: customerFormValue.cpf,
      Telephone: customerFormValue.telephone
    }

    let apiUrl = 'customer';
    this.repository.create(apiUrl, customer)
      .subscribe(res => {
        //this is temporary, until we create our dialogs
        this.location.back();
      }
      )
  }

}