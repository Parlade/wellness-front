import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  invoiceForm: FormGroup

  constructor(private _billingService: BillingService, private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      date: [""],
      hour: [""],
      price: [""],
      consumption: [""],
      costPerHour: [""]
    })
  }

  createInvoice() {
    this._billingService.createInvoice({
        date: this.invoiceForm.get("date").value,
        hour: this.invoiceForm.get("hour").value,
        price: this.invoiceForm.get("price").value,
        consumption: this.invoiceForm.get("consumption").value,
        costPerHour: this.invoiceForm.get("costPerHour").value
      })
      .subscribe(() => {
        this.router.navigate(["/invoice"])
      })

  }

}
