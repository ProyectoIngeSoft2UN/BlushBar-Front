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

  getProduct(id: number){
    return this.http.get(this.productUrl + "/" + id + ".json");
  }

  //createProduct(product: Product): Observable<Product>{
    //let headers = new Headers({'Content-Type':'aplication/json'});
    //let options = new RequestOptions({headers: headers});
    //return this.http.product(this.productUrl, JSON.stringify(product), options).map((res: Response) => res.json());
  //}

}
