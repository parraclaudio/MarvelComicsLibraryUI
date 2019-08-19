import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Customer } from '../_interface/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public requestT (): Observable<any>{
      return this.http.get<any>(environment.urlAddress+ '/api/'+ 'customer');
  }

  public getData = (route: string) => {
    console.log(this.createCompleteRoute(route, environment.urlAddress));
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public create = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  };

  public update = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  public delete = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    'Accept' : '*/*'})
    }
  }
}