import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  private customers: Array<Customer> = [
    new Customer(2001, 'li', 'man', '01-25-1993', 11111111111),
    new Customer(2002, 'liu', 'man', '01-26-1993', 11111111112),
    new Customer(2003, 'liuy', 'man', '01-27-1993', 11111111113),
    new Customer(2004, 'liuya', 'man', '01-28-1993', 11111111114),
    new Customer(2005, 'liuyan', 'man', '01-29-1993', 11111111115),
    new Customer(2006, 'liuyang', 'man', '01-30-1993', 11111111116),
  ];
  constructor() { }
  public getCustomers() {
    return this.customers;
  }
  public getCustomerById(id) {
    let customer = null;
    this.customers.forEach((item) => {
      if (id === item.id) {
        customer = item;
      }
    });
    return customer;
  }
  public changeBirthday(birthday, id) {
    const customer = this.getCustomerById(id);
    customer.birthday = birthday;
  }
  public changePhonenumber(phonenumber, id) {
    const customer = this.getCustomerById(id);
    customer.phonenumber = phonenumber;
  }
}
  export class Customer {
    constructor(
      public id: number,
      public name: string,
      public sex: string,
      public birthday: string,
      public phonenumber: number
    ) {}
  }
