import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router'

import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/app.navbarComponent';
import { headerComponent } from './header/app.headerComponent';
import { blockComponent } from './header/block/app.blockComponent';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    headerComponent,
    blockComponent,
    InfoComponent,
    FooterComponent,
    HomeComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent, navbarComponent]
})
export class AppModule { }
