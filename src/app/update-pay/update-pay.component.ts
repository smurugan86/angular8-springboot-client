import { Component, OnInit } from '@angular/core';
import { Payments } from '../payments';
import { ActivatedRoute, Router } from '@angular/router';
import { PayService } from '../pay-service/pay.service';

@Component({
  selector: 'app-update-pay',
  templateUrl: './update-pay.component.html',
  styleUrls: ['./update-pay.component.css']
})
export class UpdatePayComponent implements OnInit {

  id: number;
  payments: Payments;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PayService) { }

  ngOnInit() {
    this.payments = new Payments();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getPayment(this.id)
      .subscribe(data => {
        console.log(data)
        this.payments = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updatePayment(this.id, this.payments)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payments = new Payments();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/paylist']);
  }
}
