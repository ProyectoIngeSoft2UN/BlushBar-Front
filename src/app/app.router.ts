import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductComponent } from './product/product.component';
import { ProductShowComponent } from './product/product-show.component';
import { ProductNewComponent } from './product/product-new.component';
import { ServiceComponent } from './service/service.component';
import { ServiceShowComponent } from './service/service-show.component';
import { BodyCareComponent } from './body-care/body-care.component';
import { FragancesComponent } from './fragances/fragances.component';
import { SkinCareComponent } from './skin-care/skin-care.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'make-up', component: MakeUpComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'products/:id', component: ProductShowComponent },
  { path: 'product/new', component: ProductNewComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'services/:id', component: ServiceShowComponent },
  { path: 'body-care', component: BodyCareComponent },
  { path: 'fragances', component: FragancesComponent },
  { path: 'skin-care', component: SkinCareComponent }
];

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
