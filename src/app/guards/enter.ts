import {CanActivate} from '@angular/router';

export default  class EnterGuard implements CanActivate {
  canActivate() {
    return confirm('你确定要进入客户列表页吗？');
  }
}

