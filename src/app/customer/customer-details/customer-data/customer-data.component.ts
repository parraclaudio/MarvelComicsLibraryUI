import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/_interface/customer.model';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {

  @Input() public customer: Customer;

  public selectOptions = [{ name: 'Show', value: 'show' }, { name: `Don't Show`, value: '' }];
  
  @Output() selectEmitt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }
}
