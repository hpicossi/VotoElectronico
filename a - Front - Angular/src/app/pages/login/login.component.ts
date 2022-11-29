import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { AuthService } from 'src/app/services/auth/auth.service';
//import { LoginRequest, Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string="";
  password : string="";
  error : string="";
  usuario: User = new User();
  roles: string="";


  constructor(private usersService : UsuarioService, private router : Router, private rolesService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  ngOnInit(): void {
      if (localStorage.getItem('token')) {
          this.router.navigateByUrl('/login')
      }
  }

  logIn () {
      this.error = ''
      this.usuario.username=this.username;
      this.usuario.password=this.password;

      this.usersService.ObtenerUsuario(this.username).subscribe((data:any)=>{
        localStorage.setItem('role', data.rol);
        localStorage.setItem('llave', data.id);
        this.roles=data.rol;
        console.log(this.roles);
        this.rolesService.addRole(data.rol, []);

      })

      this.usersService.login(
        this.username, this.password).subscribe((login:Token) => {
          localStorage.setItem('token', JSON.stringify(login.token));

          if (localStorage.getItem('role')=='ADMIN') {
            this.router.navigateByUrl('/dash-adm');
          }
          else{
            this.router.navigateByUrl('/dash-usr')
          }

          
        }, (error : ErrorEvent) => {
          console.log(error);
          this.error = "Invalid login credentials"
        }
        )



  }

}
