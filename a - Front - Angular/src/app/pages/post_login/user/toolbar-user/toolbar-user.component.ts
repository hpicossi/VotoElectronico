import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.css']
})
export class ToolbarUserComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private usersService : UsuarioService, private router : Router) {}

  logOut () {
    this.usersService.logOut();
    this.router.navigateByUrl('/login')
  }
}
