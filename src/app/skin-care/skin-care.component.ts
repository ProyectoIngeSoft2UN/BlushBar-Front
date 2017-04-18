import { Component, OnInit } from '@angular/core';
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
constructor(private productService: ProductService) { }

ngOnInit() {
  let timer = Observable.timer(0, 5000);
  timer.subscribe(() => this.getProducts())
}

getProducts(){
  this.productService.getProducts().subscribe(products => this.products = products);
}

}
