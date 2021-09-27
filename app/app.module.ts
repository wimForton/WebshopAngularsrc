import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingBarrel } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductpageComponent } from './productpage/productpage.component';

import { ProductService } from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailpageComponent } from './detailpage/detailpage.component';

export const servicesBarrel = [
  //UserService,
  ProductService,
];

@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent,
    SearchBoxComponent,
    DetailpageComponent,
    routingBarrel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    servicesBarrel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
