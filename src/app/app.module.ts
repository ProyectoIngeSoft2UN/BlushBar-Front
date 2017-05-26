import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/app.navbarComponent';
import { headerComponent } from './header/app.headerComponent';
import { blockComponent } from './header/block/app.blockComponent';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductComponent } from './product/product.component';
import { ProductShowComponent } from './product/product-show.component';
import { ProductNewComponent } from './product/product-new.component';
import { ProductService } from './product/product.service';
import { ServiceComponent } from './service/service.component'
import { ServiceShowComponent } from './service/service-show.component'
import { ServiceService } from './service/service.service';
import { ServiceNewComponent } from './service/service-new.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { FragancesComponent } from './fragances/fragances.component';
import { BodyCareComponent } from './body-care/body-care.component';
@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    headerComponent,
    blockComponent,
    InfoComponent,
    FooterComponent,
    HomeComponent,
    BodyComponent,
    MakeUpComponent,
    AccessoriesComponent,
    ProductComponent,
    ProductShowComponent,
    ProductNewComponent,
    SkinCareComponent,
    FragancesComponent,
    BodyCareComponent,
    ServiceComponent,
    ServiceShowComponent,
    ServiceNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ProductService,
    ServiceService
  ],
  bootstrap: [AppComponent, navbarComponent]
})
export class AppModule { }
