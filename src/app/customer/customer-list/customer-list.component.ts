import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Customer } from '../../_interface/customer.model';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

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

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(private repoService: RepositoryService, private router : Router) { }



  ngOnInit() {
    this.getAllCustomers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public getAllCustomers = () => {
    this.repoService.getData('customer').subscribe(resp => {
      const customers = JSON.parse(resp.data) as Customer[];
      this.dataSource.data = customers;
    });
    
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/customer/details/${id}`;
    this.router.navigate([url]);
  }
  
  public redirectToUpdate = (Key: string) => {

  }

  public redirectToDelete = (Key: string) => {

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
