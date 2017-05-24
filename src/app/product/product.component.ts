import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: '/product.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }



  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProducts())
    //this.getProducts()
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  goToShow(product: Product): void{
    this.router.navigate(['/products', product.id]);
  }
}
