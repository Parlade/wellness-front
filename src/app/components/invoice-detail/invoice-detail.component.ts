import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingService } from '../../services/billing.service';
import { IInvoice } from '../../interfaces/invoice';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoiceForm: FormGroup
  invoiceDetail: IInvoice

  private invoiceId: string

  constructor(private _billingService: BillingService, private fb:FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.invoiceForm = this.fb.group({
      _id: [""],
      date: [""],
      hour: [""],
      price: [""],
      consumption: [""],
      costPerHour: [""]
    })
  }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get("id")

    this.getInvoice(this.invoiceId)
  }

  getInvoice(id: string) {
    this._billingService.getInvoiceById(id).subscribe((result: IInvoice) => {
      this.invoiceDetail = result


      this.invoiceForm.get("_id").setValue(this.invoiceDetail._id)
      this.invoiceForm.get("date").setValue(this.invoiceDetail.date)
      this.invoiceForm.get("hour").setValue(this.invoiceDetail.hour)
      this.invoiceForm.get("price").setValue(this.invoiceDetail.price)
      this.invoiceForm.get("consumption").setValue(this.invoiceDetail.consumption)
      this.invoiceForm.get("costPerHour").setValue(this.invoiceDetail.costPerHour)
      
    })
  }

  updateInvoice() {
    this._billingService.updateInvoice({
        _id: this.invoiceForm.get("_id").value,
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

  deleteInvoice() {
    this._billingService.deleteInvoice(this.invoiceForm.get("_id").value)
    .subscribe(() => {
      this.router.navigate(["/invoice"])
    })
  }

}
