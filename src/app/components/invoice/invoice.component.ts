import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BillingService } from '../../services/billing.service';
import { IInvoice } from '../../interfaces/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: IInvoice[]= []

  constructor( private _billingService: BillingService, private router: Router) { }

  ngOnInit(): void {

    this.getInvoices()
  
  }

  modifyInvoice(index: number) {
    const invoice = this.invoices[index]
    this.router.navigate(["/invoice", invoice._id])
  }


  private getInvoices(): void {
    this._billingService.getAllInvoices()
      .subscribe((response: IInvoice[]) => {
        this.invoices = response
      })
  }

}
