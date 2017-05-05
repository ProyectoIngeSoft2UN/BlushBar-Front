import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-show',
  templateUrl: 'product-show.component.html'
})

export class ProductShowComponent implements OnInit
{
  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){}

  @Input() product: Product;
/*
  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/products';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let productRequest = this.route.params.flatMap((params: Params) => this.productService.getProduct(+params['id']));
    productRequest.subscribe(response => this.product = response.json());
  }*/

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe((product: Product) => this.product = product);
  }
}
