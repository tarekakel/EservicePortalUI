import {  inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authService = inject(AccountService);
    const router = inject(Router);
  
    return authService.currentUser$.pipe(
      map(() => true),
      catchError(() => {
        
        router.navigate(['/account/login']);
        return of(false);
      })
    );
  };
  
  export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);