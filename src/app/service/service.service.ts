import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Service } from './service';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ServiceService {
  headers: Headers;
  options: RequestOptions;
  private servicesUrl = 'http://localhost:3000/services';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getServices(): Observable<Service[]>{
    return this.http.get(this.servicesUrl).map((response: Response) => <Service[]>response.json())
  }

  getService(id: number){
    return this.http.get(this.servicesUrl + "/" + id + ".json");
  }

  createService(service: Service): Observable<Service>{
    let headers = new Headers({'Content-Type':'aplication/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.servicesUrl, JSON.stringify(service),
            this.options).map((res: Response) => res.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
