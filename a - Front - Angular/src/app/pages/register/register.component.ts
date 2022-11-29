import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Token } from 'src/app/models/Token';

import { ValidatorFn, AbstractControl} from '@angular/forms';
import {  UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formulario:FormGroup;
  usuario: User = new User();

  error : string="";
  currentUserName?: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService, private route: ActivatedRoute) {
    this.formulario= this.formBuilder.group(
      {
        nombre : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
        username : new FormControl('', [Validators.required]),
        apellido : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
        identificador : new FormControl('', [Validators.required, Validators.minLength(2)]),
        email : new FormControl('', [Validators.required, Validators.email]),
        contrasena : new FormControl('', [Validators.required, Validators.minLength(8)]),
        contrasena2 : new FormControl('', [Validators.required, Validators.minLength(8)]),
        telefono : new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^([0-9])*$/)]),
      }
    )
  }

  ngOnInit(): void {
    this.currentUserName = this.route.snapshot.paramMap.get('username');
    if (this.currentUserName) {
      if (localStorage.getItem('token')) {
        this.router.navigateByUrl('edit-user/' + this.currentUserName);
        this.usuarioService.getUser(this.currentUserName).subscribe(data => {
          this.usuario = data;
          this.usuario.password = "";
          const contenedor: HTMLElement = document.getElementById('tituloRegistro') as HTMLElement;
          contenedor.innerHTML = 'Editar Usuario';
          const contenedorBoton: HTMLElement = document.getElementById('envio') as HTMLElement;
          contenedorBoton.innerHTML = "Editar";
        })
      }
    }
    else {
      if (localStorage.getItem('token')) {
        this.router.navigateByUrl('/register')
      }
    }
  }

  onEnviar(event: Event, usuario:User): void {
    event.preventDefault;

    if (this.formulario.valid)
    {
      console.log(usuario);
      if (this.currentUserName) {
        this.usuarioService.updateUser(this.usuario.id, this.usuario.username, this.usuario.lastname, this.usuario.password, this.usuario.email, this.usuario.name, this.usuario.dni, this.usuario.phone)
        .subscribe((data) => {
          this.router.navigateByUrl('/gestionuser-adm');
        }, (error : ErrorEvent) => {
          this.error = error.error
        })
      }
      else {
        this.usuarioService.register(
          this.usuario.username, this.usuario.lastname, this.usuario.password, this.usuario.email, this.usuario.name, this.usuario.dni, this.usuario.phone).subscribe((token : Token) => {
              localStorage.setItem('token', token.token);
              this.router.navigateByUrl('/login').then(() => window.location.reload())
          }, (error : ErrorEvent) => {
              this.error = error.error
          })
      }
    }
    else
    {
      this.formulario.markAllAsTouched();
    }
  };


register () {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/

  this.error = ''


  this.usuarioService.register(
      this.usuario.username, this.usuario.name, this.usuario.lastname, this.usuario.password, this.usuario.email, this.usuario.dni, this.usuario.phone).subscribe((token : Token) => {
          localStorage.setItem('token', token.token);
          this.router.navigateByUrl('/login').then(() => window.location.reload())
      }, (error : ErrorEvent) => {
          this.error = error.error
      })
}

  get Contrasena()
{
  return this.formulario.get("contrasena");
}

get Contrasena2()
{
  return this.formulario.get("contrasena2");
}
/*get pass()
{
  return this.form.get("password2");
}*/

get Identificador()
{
  return this.formulario.get("identificador");
}

get Telefono()
{
  return this.formulario.get("telefono");
}

get Username()
{
  return this.formulario.get("username");
}


get Mail()
{
 return this.formulario.get("email");
}

get Nombre()
{
  return this.formulario.get("nombre");
}

get Apellido()
{
 return this.formulario.get("apellido");
}

get FechaNacimiento()
{
 return this.formulario.get("fecha_nacimiento");
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
