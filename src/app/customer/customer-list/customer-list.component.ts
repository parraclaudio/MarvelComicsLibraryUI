import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Customer } from '../../_interface/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  public displayedColumns = [
    'email', 
    'cpf', 
    'name',
    'telephone', 
    'details', 
    'update', 
    'delete'
  ];
  
  public dataSource = new MatTableDataSource<Customer>();

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  public getAllCustomers = () => {


    this.repoService.getData('api/customer').subscribe(response => {
      //do something with response
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    })
  }

  public redirectToDetails = (key: string) => {

  }

  public redirectToUpdate = (key: string) => {

  }

  public redirectToDelete = (key: string) => {

  }

}
