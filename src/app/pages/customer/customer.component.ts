import { Component, OnInit } from '@angular/core';
import {CustomerService, Customer} from '../../services/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers: Array<Customer> = [];
  constructor( route: ActivatedRoute, customerService: CustomerService ) {
    route.data.subscribe((data) => {
      alert(data.prepared);
    });
    this.customers = customerService.getCustomers();
  }

  ngOnInit() {
  }

}
