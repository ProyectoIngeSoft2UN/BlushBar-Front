import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'  
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProducts())
  }

  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
