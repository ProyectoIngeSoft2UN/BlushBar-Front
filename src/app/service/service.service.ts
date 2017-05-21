import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Service } from './service';

@Injectable()
export class ServiceService {
  private servicesUrl = 'http://localhost:3000/services';

  constructor(private http: Http) {}

  getServices(): Observable<Service[]>{
    return this.http.get(this.servicesUrl).map((response: Response) => <Service[]>response.json())
  }

  getService(id: number){
    return this.http.get(this.servicesUrl + "/" + id + ".json");
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
