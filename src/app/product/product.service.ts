import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product';

@Injectable()
export class ProductService {
  headers: Headers;
  options: RequestOptions;
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getProducts(): Observable<Product[]>{
    return this.http.get(this.productUrl).map((response: Response) => <Product[]>response.json())
  }

  getProduct(id: number){
    return this.http.get(this.productUrl + "/" + id + ".json");
  }

  //createProduct(product: Product): Observable<Product>{
    //let headers = new Headers({'Content-Type':'aplication/json'});
    //let options = new RequestOptions({headers: headers});
    //return this.http.product(this.productUrl, JSON.stringify(product), options).map((res: Response) => res.json());
  //}
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
