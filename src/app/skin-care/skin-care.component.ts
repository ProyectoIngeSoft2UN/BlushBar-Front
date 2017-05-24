import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent implements OnInit {
  products: Product[];
  selectedProduct: Product

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    //let timer = Observable.timer(0, 5000);
    //timer.subscribe(() => this.getProducts())
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  goToShow(product: Product): void{
    this.router.navigate(['/products', product.id]);
  }

}
