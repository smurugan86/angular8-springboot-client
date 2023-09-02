import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreatePayEventsComponent } from './pay-events/create-pay-events.component';
import { PayEventsListComponent } from './pay-events-list/pay-events-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdatePayComponent } from './update-pay/update-pay.component';
import { PayEvents } from './pay-events-list2/pay-events-list.component2';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'paylist', component: PayEventsListComponent },
  { path: 'payments', component: CreatePayEventsComponent },
  { path: 'updatePay/:id', component: UpdatePayComponent },
  { path: 'paylist2', component: PayEvents }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
