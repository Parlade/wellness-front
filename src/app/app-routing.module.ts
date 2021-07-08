import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';

const routes: Routes = [
  {path:"", pathMatch: "full", redirectTo: "home"},
  {path: "home", component:HomeComponent},
  {path: "invoice", component:InvoiceComponent},
  {path: "invoice/new", component:NewInvoiceComponent},
  {path: "invoice/:id", component:InvoiceDetailComponent},
  {path: "**", redirectTo:"home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
