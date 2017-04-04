import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { InfoComponent } from './info/info.component'
import { HomeComponent } from './home/home.component'
import { MapComponent } from './map/app.map'

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'home', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
