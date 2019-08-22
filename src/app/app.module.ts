import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './generalcomponents/header/header.component';
import { PagenotfoundComponent } from './generalcomponents/pagenotfound/pagenotfound.component';
import { FooterComponent } from './generalcomponents/footer/footer.component';
import { BannerComponent } from './generalcomponents/banner/banner.component';
import { AboutusComponent } from './generalcomponents/aboutus/aboutus.component';
import { ServicesComponent } from './generalcomponents/services/services.component';
import { VatComponent } from './generalcomponents/vat/vat.component';
import { GstComponent } from './generalcomponents/gst/gst.component';
import { ReviewsComponent } from './generalcomponents/reviews/reviews.component';
import { ContactusComponent } from './generalcomponents/contactus/contactus.component';
import { ClientsComponent } from './generalcomponents/clients/clients.component';
import { HomecomponentComponent } from './generalcomponents/homecomponent/homecomponent.component';
import { ClientsModule } from './clients/clients.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    FooterComponent,
    BannerComponent,
    AboutusComponent,
    ServicesComponent,
    VatComponent,
    GstComponent,
    ReviewsComponent,
    ContactusComponent,
    ClientsComponent,
    HomecomponentComponent
  ],
  imports: [
    BrowserModule,
    ClientsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
