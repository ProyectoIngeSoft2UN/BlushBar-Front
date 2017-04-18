import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Service } from './service';

@Injectable()
export class ServiceService {
  private productUrl = 'http://localhost:3000/services';
  constructor(private http: Http) {}
  getServices(): Observable<Service[]>{
    return this.http.get(this.productUrl).map((response: Response) => <Service[]>response.json())
  }
}
