import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreatePayEventsComponent } from './pay-events/create-pay-events.component';
import { PayEventsListComponent } from './pay-events-list/pay-events-list.component';
import { UpdatePayComponent } from './update-pay/update-pay.component';
import { AgGridModule } from 'ag-grid-angular';
import { RemoteGridBindingDirective } from './remote-grid-binding.directive';
import { PayEvents } from './pay-events-list2/pay-events-list.component2';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreatePayEventsComponent,
    PayEventsListComponent,
    UpdatePayComponent,
    PayEvents,
    RemoteGridBindingDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
