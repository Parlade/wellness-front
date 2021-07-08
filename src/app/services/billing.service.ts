import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvoice } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private invoiceAPIURL = "http://localhost:3000/invoice/"

  constructor(private httpClient: HttpClient) { }


  getAllInvoices(): Observable<IInvoice[]> {
    return this.httpClient.get<IInvoice[]>(this.invoiceAPIURL)
  }

  getInvoiceById(invoiceId: string): Observable<IInvoice> {
    return this.httpClient.get<IInvoice>(this.invoiceAPIURL + invoiceId)
  }

  createInvoice(invoice: IInvoice): Observable<IInvoice> {
    return this.httpClient.post<IInvoice>(this.invoiceAPIURL, invoice)
  }

  updateInvoice(invoice: IInvoice): Observable<IInvoice> {
    return this.httpClient.put<IInvoice>(this.invoiceAPIURL + invoice._id, invoice)
  }

  deleteInvoice(id: string): Observable<IInvoice> {
    return this.httpClient.delete<IInvoice>(this.invoiceAPIURL + id)
  }
}
