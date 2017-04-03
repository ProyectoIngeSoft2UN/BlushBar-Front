import { Component, OnInit } from '@angular/core';
import { headerComponent } from '../header/app.headerComponent';
import { blockComponent } from '../header/block/app.blockComponent';
import { FooterComponent } from '../footer/footer.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
