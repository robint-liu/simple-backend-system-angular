import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService, Customer} from '../../services/customer.service';

@Component({
  selector: 'app-c-details',
  templateUrl: './c-details.component.html',
  styleUrls: ['./c-details.component.css']
})
export class CDetailsComponent implements OnInit {
  private id = 0;
  private customer: Customer = new Customer(2001, '', '', '', 0);
  constructor(route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
    route.params.subscribe((params) => {
      this.id = parseInt(params.id, 10);
      this.customer = this.customerService.getCustomerById(this.id);
    });
  }

  ngOnInit() {
  }
 public handleSave(birthday, phonenumber) {
    this.customerService.changeBirthday(birthday, this.id);
    this.customerService.changePhonenumber(phonenumber, this.id);
   this.router.navigate(['/customer']);
 }
}
