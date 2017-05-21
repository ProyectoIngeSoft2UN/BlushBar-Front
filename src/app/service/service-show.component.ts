import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Service } from './service';
import { ServiceService } from './service.service';

@Component({
  selector: 'product-show',
  templateUrl: 'service-show.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceShowComponent implements OnInit{

  @Input() service: Service;
  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
  ){}



  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/services';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let serviceRequest = this.route.params.flatMap((params: Params) => this.serviceService.getService(+params['id']));
    serviceRequest.subscribe(response => this.service = response.json());
  }

  /*ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe((product: Product) => this.product = product);
  }*/
}
