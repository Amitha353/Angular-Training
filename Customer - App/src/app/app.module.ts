import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { HoverDirective } from './hover.directive';
import { DataService } from './common/data.service';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { CapsPipe } from './caps.pipe';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { LinkActivate } from './common/link.activate';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'orders',
    component: CustomersComponent
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent,
    canActivate: [LinkActivate]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerCardComponent,
    HoverDirective,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    CapsPipe,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, LinkActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**
 * Module class - has no methods or members, it encapsulates components, services, etc.
 */