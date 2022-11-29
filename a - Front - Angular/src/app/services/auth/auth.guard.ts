import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: UsuarioService, private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
      console.log("GUARDS WORKING");
      return this.authService.estaAutenticado.pipe(
       map(e => {
         console.log(e);
         if (e) {
           return true;
         }
         else
         {
           this.router.navigate(['/login']);
           return false;
         }
       }),
       catchError((err) => {
         this.router.navigate(['/login']);
         console.log(err);
         return of(false);
       })
     );

  }

}