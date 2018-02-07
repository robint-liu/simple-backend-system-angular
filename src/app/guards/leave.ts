import {CanDeactivate} from '@angular/router';
import {CustomerComponent} from '../pages/customer/customer.component';

export default class LeaveGuard implements CanDeactivate<CustomerComponent> {
  canDeactivate() {
    return confirm('你确定要退出客户列表吗？');
  }
}
