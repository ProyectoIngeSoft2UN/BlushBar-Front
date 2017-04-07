import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { InfoComponent } from './info/info.component'
import { adminsComponent } from './admins/app.adminsComponent'
import { appointmentsComponent } from './appointments/app.appointmentsComponent'
import { categoriesComponent } from './categories/app.categoriesComponent'
import { clientsComponent } from './clients/app.clientsComponent'
import { employeesComponent } from './employees/app.employeesComponent'
import { storesComponent } from './stores/app.storesComponent'

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admins', component: adminsComponent },
  { path: 'appointments', component: appointmentsComponent },
  { path: 'categories', component: categoriesComponent },
  { path: 'clients', component: clientsComponent },
  { path: 'employees', component: employeesComponent },
  { path: 'stores', component: storesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
