import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Services are injected into constructors
  baseCustomerUrl = 'http://localhost:3000/customers/';
  baseOrderUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseCustomerUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseCustomerUrl}${id}`);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(this.baseCustomerUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put<any>(`${this.baseCustomerUrl}${customer.id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseCustomerUrl}${id}`);
  }

  getOrders(): Observable<any>{
    return this.http.get<any>(this.baseOrderUrl);
  }

  // getOrder(): Observable<Order[]>{
  //   return this.http.get<Order[]>(this.baseOrderUrl);
  // }
}
