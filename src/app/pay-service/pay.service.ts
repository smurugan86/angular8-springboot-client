import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  private baseUrl = 'http://localhost:8080/api/v1/payevents';
 // http://localhost:8080/api/v1/payevents

  constructor(private http: HttpClient) { }

  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPayment(employee: Object): Observable<Object> {
    console.log(employee);
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updatePayment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPaymentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPaymentList2(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pays`);
  }

}
