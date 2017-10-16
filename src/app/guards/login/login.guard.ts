import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AppStateManagementService} from '../../common-services/app-state-management/app-state-management.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private appStateManagementService: AppStateManagementService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.appStateManagementService.getLS$(`authentication-token`)
      .map(value => {
        if (!!value) {
          this.router.navigate([`page/dashboard`])
            .then();
        }
        return !value;
      })
      .take(1);
  }
}
