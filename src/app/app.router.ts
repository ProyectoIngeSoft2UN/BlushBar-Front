import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { BodyCareComponent } from './body-care/body-care.component';
import { FragancesComponent } from './fragances/fragances.component';
import { SkinCareComponent } from './skin-care/skin-care.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'make-up', component: MakeUpComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'body-care', component: BodyCareComponent },
  { path: 'fragances', component: FragancesComponent },
  { path: 'skin-care', component: SkinCareComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
