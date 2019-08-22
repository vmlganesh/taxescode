import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './generalcomponents/homecomponent/homecomponent.component';
import { AboutusComponent } from './generalcomponents/aboutus/aboutus.component';
import { ServicesComponent } from './generalcomponents/services/services.component';
import { GstComponent } from './generalcomponents/gst/gst.component';
import { VatComponent } from './generalcomponents/vat/vat.component';
import { ReviewsComponent } from './generalcomponents/reviews/reviews.component';
import { ContactusComponent } from './generalcomponents/contactus/contactus.component';

const routes: Routes = [
  {path:"",component:HomecomponentComponent},
  {path:"about",component:AboutusComponent},
  {path:"services",component:ServicesComponent},
  {path:"gst",component:GstComponent},
  {path:"vat",component:VatComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"contact",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
