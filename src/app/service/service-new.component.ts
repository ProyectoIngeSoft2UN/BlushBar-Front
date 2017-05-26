import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Service } from './service';
import { ServiceService } from './service.service';

@Component({
  selector: 'new-service',
  templateUrl: '/service-new.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceNewComponent {
  service = new Service;
  submitted: boolean = false; //check if the form is submitted

  constructor(private serviceService: ServiceService){}

  createService(service: Service){
    this.submitted = true;
    this.serviceService.createService(service)
      .subscribe(data => {console.log("service created");},
      error =>{
        console.log(error);
        return Observable.throw(error);
      }
    )
  }

}
