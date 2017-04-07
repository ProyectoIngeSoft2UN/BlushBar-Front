import { Component } from '@angular/core';
import { navbarComponent } from './navbar/app.navbarComponent';
import { headerComponent } from './header/app.headerComponent';
import { blockComponent } from './header/block/app.blockComponent';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works finaly!';
  product;

  constructor(private http: Http) {
    http.get('http://localhost:3000/product.json').subscribe(res => this.product = res.json());
  }  
}
