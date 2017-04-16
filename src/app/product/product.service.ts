import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product';

@Injectable()
export class ProductService {
  private productUrl = 'http://localhost:3000/products';
  constructor(private http: Http) {}
  getProducts(): Observable<Product[]>{
    return this.http.get(this.productUrl).map((response: Response) => <Product[]>response.json())
  }
}
