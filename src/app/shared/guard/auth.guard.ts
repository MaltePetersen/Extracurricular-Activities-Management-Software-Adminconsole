import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const expectedRole = route.data.role;
        let  user = this.auth.currentUserValue;
       
        if(user === null && expectedRole === 'NULL'){
            return	true;
        }
        else if (user.role && expectedRole === user.role) {
            return true;
                  }
        else if(user === null){
            return this.router.parseUrl('/login');
          }  
          else if(user.role === 'ROLE_MANAGEMENT'){
            return this.router.parseUrl('/management');
          }
          else if(user.role === 'ROLE_SCHOOLCOORDINATOR'){
            return this.router.parseUrl('/parent/erziehungsberechtigte-dashboard');
          }
        }    
}
