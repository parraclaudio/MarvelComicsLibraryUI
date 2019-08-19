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
    'Email', 
    'Cpf', 
    'Name',
    'Telephone', 
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
    this.repoService.requestT().subscribe(resp => {

      const j = JSON.parse(resp.data);
      const c = j as Customer[];
      
      const customerEmail = c[0];
      console.log(customerEmail);
       console.log(customerEmail.Email);
       this.dataSource.data = c;
       console.log(this.dataSource.data)
    });
    
  }

  public redirectToDetails = (key: string) => {

  }

  public redirectToUpdate = (key: string) => {

  }

  public redirectToDelete = (key: string) => {

  }

}
