import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_interface/customer.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/_interface/comic.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  public customer: Customer;
  public showComic;

  constructor(private repository: RepositoryService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  private getCustomerDetails = () => {
    let key: string = this.activeRoute.snapshot.params['key'];
    let apiUrl: string = `Customer/${key}`;
    let apiUrl2: string = `Customer/${key}/ComicBorrow`;

    this.repository.getData(apiUrl)
      .subscribe(res => {
        this.customer = JSON.parse(res.data) as Customer;
        
        this.repository.getData(apiUrl2).subscribe(res => {
          this.customer.comics = JSON.parse(res.data) as Comic[]
        }

        )

      },
        (error) => {
          console.log(error);
        })
  }

}
