import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usr-adm',
  templateUrl: './crear-usr-adm.component.html',
  styleUrls: ['./crear-usr-adm.component.css']
})
export class CrearUsrAdmComponent implements OnInit {
  userForm: FormGroup;

  /*usuario: Usuario = new Usuario();*/

  usuario: User = new User();
  error: string = "";
  currentUserName?: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService) {
      this.userForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        mail: ['', [Validators.required]],
        rol: ['', [Validators.required]],
        nombreUsuario: ['', [Validators.required]],
        contraseña: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.currentUserName = this.route.snapshot.paramMap.get('userId');
    if (this.currentUserName) {
      if (localStorage.getItem('token')) {
        this.router.navigateByUrl('edit-user/' + this.currentUserName);
        this.usuarioService.getUserById(this.currentUserName).subscribe(data => {
          this.usuario = data;
          this.usuario.password = "";
          const contenedor: HTMLElement = document.getElementById('tituloAdministrarUsuario') as HTMLElement;
          contenedor.innerHTML = 'Editar Usuario';
          const contenedorBoton: HTMLElement = document.getElementById('botonSubir') as HTMLElement;
          contenedorBoton.innerHTML = "Guardar cambios";
        })
      }
    }
    else {
      if (localStorage.getItem('token')) {
        this.router.navigateByUrl('/crearusr-adm')
      }
    }
  }

  onEnviar(event: Event, usuario:User): void {
    event.preventDefault;

    if (this.userForm.valid)
    {
      console.log(usuario);
      if (this.currentUserName) {
        this.usuarioService.updateUser(this.currentUserName, this.usuario.username, this.usuario.lastname, this.usuario.password, this.usuario.email, this.usuario.name, this.usuario.dni, this.usuario.phone)
        .subscribe((data) => {
          this.router.navigateByUrl('/gestionuser-adm');
        }, (error : ErrorEvent) => {
          this.error = error.error
        })
      }
      else {
        this.usuarioService.register(
          this.usuario.username, this.usuario.lastname, this.usuario.password, this.usuario.email, this.usuario.name, this.usuario.dni, this.usuario.phone).subscribe((data) => {
              this.router.navigateByUrl('/gestionuser-adm');
          }, (error : ErrorEvent) => {
              this.error = error.error
          })
      }
    }
    else
    {
      this.userForm.markAllAsTouched();
    }
  };


  get Contrasena()
  {
    return this.userForm.get("contrasena");
  }

  get Contrasena2()
  {
    return this.userForm.get("contrasena2");
  }


  get Identificador()
  {
    return this.userForm.get("identificador");
  }

  get Telefono()
  {
    return this.userForm.get("telefono");
  }

  get Username()
  {
    return this.userForm.get("username");
  }


  get Mail()
  {
   return this.userForm.get("email");
  }

  get Nombre()
  {
    return this.userForm.get("nombre");
  }

  get Apellido()
  {
   return this.userForm.get("apellido");
  }

  get FechaNacimiento()
  {
   return this.userForm.get("fecha_nacimiento");
  }


  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get NombreValid()
  {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get ApellidoValid()
  {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

  get TelefonoValid()
  {
    return this.Telefono?.touched && !this.Telefono?.valid;
  }

  get ContrasenaValid()
  {
    return this.Contrasena?.touched && !this.Contrasena?.valid;
  }

  get Contrasena2Invalid()
  {
    return (this.Contrasena?.value != this.Contrasena2?.value) && this.Contrasena2?.touched;
  }


  get FechaNacimientoValid()
  {
    return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
  }

  get IdentificadorValid(){
    return this.Identificador?.touched && !this.Identificador?.valid;
  }

  get UsernameValid(){
    return this.Username?.touched && !this.Username?.valid;
  }
}
