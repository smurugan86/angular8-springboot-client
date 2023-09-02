import { Observable } from "rxjs";
import { PayService } from '../pay-service/pay.service';
import { Payments } from "../payments";
import { Component, NgModule, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { GridApi } from 'ag-grid-community';
import { AgGridModule } from "ag-grid-angular";
import { RemoteGridApi } from '../remote-grid-api';
import { NgModel } from "@angular/forms";
import { AppComponent } from "../app.component";
import { Browser } from "protractor";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-pay-events-list2",
  templateUrl: "./pay-events-list.component2.html",
  styleUrls: ["./pay-events-list.component2.css"]
})

@NgModule({
  declarations: [ AppComponent ],
  imports: 
    [
      BrowserModule,     
      AgGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class PayEvents {

  columnDefs = [
    { field: 'make', sortable: true, filter: true}, 
    { field: 'model', sortable: true, filter: true}, 
    { field: 'price', sortable: true, filter: true}];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 }
  ];

  gridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 17,
    paginationPageSize: 17
  };

  gridApi: GridApi;
  remoteGridBinding = this;

  onGridReady(params) {
    this.gridApi = params.api;
  }

 //getData(params): Observable<{ data; totalRecords }> {
   // return of({ data: this.rowData, totalRecords: 85 });
   //return ;
  //}
  
}
