import { Component } from '@angular/core';
import { navbarComponent } from './navbar/app.navbarComponent';
import { headerComponent } from './header/app.headerComponent';
import { blockComponent } from './header/block/app.blockComponent';
import { adminsComponent } from './admins/app.adminsComponent'
import { appointmentsComponent } from './appointments/app.appointmentsComponent'
import { categoriesComponent } from './categories/app.categoriesComponent'
import { clientsComponent } from './clients/app.clientsComponent'
import { employeesComponent } from './employees/app.employeesComponent'
import { storesComponent } from './stores/app.storesComponent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works finaly!';
}
