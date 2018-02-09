import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService, Customer} from '../../services/customer.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

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
  private fb = new FormBuilder();
  private  customerForm = this.fb.group({
    customerName: [this.customer.name, [ Validators.required ]], // new FormCantrol改为数组。
    customerSex: [this.customer.sex, [ Validators.required ]],
    customerBirthday: [this.customer.birthday, [ Validators.required ]],
    customerPhonenumber: [this.customer.phonenumber, [ Validators.required ]],
  });
  private valid = true;
  ngOnInit() {
  }
 public handleSave() {
    const customerName = this.customerForm.get('customerName') as FormControl;
    const customerBirthday = this.customerForm.get('customerBirthday') as FormControl;
    const customerPhonenumber = this.customerForm.get('customerPhonenumber') as FormControl;
    if (customerName.value === '') {
      this.valid = false;
    } else {
      this.valid = true;
      this.customerService.changeBirthday(customerBirthday.value, this.id);
      this.customerService.changePhonenumber(customerPhonenumber.value, this.id);
      this.router.navigate(['/customer']);
    }
 }
}
