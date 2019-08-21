import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public getData = (route: string): Observable<any> => {
    return this.http.get<any>(this.createCompleteRoute(route, environment.urlAddress));
  }

  public create = (route: string, body): Observable<any>  => {
    return this.http.post<any>(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  };

  public update = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  public delete = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/api/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  }
}