import { Component } from '@angular/core';
import { navbarComponent } from './navbar/app.navbarComponent';
import { headerComponent } from './header/app.headerComponent';
import { blockComponent } from './header/block/app.blockComponent';
import { blockComponent } from './map/block/app.mapsComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works finaly!';
}
