import { PayService } from '../pay-service/pay.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payments } from '../payments';

@Component({
  selector: 'app-pay-events',
  templateUrl: './create-pay-events.component.html',
  styleUrls: ['./pay-events.component.css']
})
export class CreatePayEventsComponent implements OnInit {

  payments: Payments = new Payments();
  submitted = false;

  constructor(private employeeService: PayService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.payments = new Payments();
  }

  save() {
    this.employeeService.createPayment(this.payments)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payments = new Payments();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/paylist']);
  }
}
