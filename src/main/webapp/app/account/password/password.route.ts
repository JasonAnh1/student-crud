import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import PasswordComponent from './password.component';

const passwordRoute: Route = {
  path: 'password',
  component: PasswordComponent,
  title: 'Mật khẩu',
  canActivate: [UserRouteAccessService],
};

export default passwordRoute;
