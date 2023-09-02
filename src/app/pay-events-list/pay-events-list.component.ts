import { Observable } from "rxjs";
import { PayService } from '../pay-service/pay.service';
import { Payments } from "./../payments";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { RemoteGridApi } from '../remote-grid-api';

@Component({
  selector: "app-pay-events-list",
  templateUrl: "./pay-events-list.component.html",
  styleUrls: ["./pay-events-list.component.css"]
})

export class PayEventsListComponent implements OnInit {
  payments: Observable<Payments[]>;
  mp: Observable<Map<any, any>>;

  rowData$: Observable<any[]>;

 // rowData = [];

  constructor(private payservice: PayService,
   private router: Router) {}


  columnDefs = [
    { field: 'eventDate' , sortable: true, filter: true}, 
    { field: 'payType', sortable: true, filter: true}, 
    { field: 'details' , sortable: true, filter: true},
    { field: 'amount' , sortable: true, filter: true}
  ];


  gridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 10,
    paginationPageSize: 10
  };
 gridApi: GridApi;
  remoteGridBinding = this;

  onGridReady(params) {
    this.gridApi = params.api;
  }

  

  //getData(params): Observable<{ data; totalRecords }> {
    //this.payments = this.payservice.getPaymentList();   
    
    //this.payservice.getPayments().subscribe((data) => {
      //this.rowData = data;   
    // });

    //return of({ data: this.rowData, totalRecords: 85 });
  //}


  ngOnInit() {
    this.reloadData();
  }
  dd: any;
  reloadData() {
    this.payments = this.payservice.getPaymentList();   
    this.rowData$ = this.payservice.getPaymentList();  
    this.payservice.getPayments().subscribe((data) => {
      this.dd = data;         
     });

  }


  deletePay(id: number) {
    this.payservice.deletePayment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  payDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePay(id: number){
    this.router.navigate(['updatePay', id]);
  }
}
