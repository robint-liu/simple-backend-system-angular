import {Resolve} from '@angular/router';

export default class ResolveGuard implements Resolve<any> {
  resolve() {
    return 'prepared data';
  }
}
