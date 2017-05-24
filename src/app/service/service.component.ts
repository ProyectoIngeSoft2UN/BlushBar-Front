import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Service } from './service';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[];
  selectedService: Service;

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getServices())
  }
  getServices(){
    this.serviceService.getServices().subscribe(services => this.services = services);
  }

  onSelect(service: Service): void {
    this.selectedService = service;
  }

  serviceShow(service: Service): void {
    this.router.navigate(['/services', service.id]);
  }

}
