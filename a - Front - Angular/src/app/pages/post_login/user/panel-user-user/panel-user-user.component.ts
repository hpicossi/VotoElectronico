import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';

import { UsuarioService
 } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-panel-user-user',
  templateUrl: './panel-user-user.component.html',
  styleUrls: ['./panel-user-user.component.css']
})
export class PanelUserUserComponent implements OnInit {
  panelForm: FormGroup;

  idPanel?: any;

    user : User=new User();
    editMode : boolean = false;

    name : string="";
    username : string="";
    email : string="";
    address : string="";
    phone : string="";
  llave:any;

  constructor(private fb: FormBuilder,private usersService : UsuarioService, private router : Router) { 
    this.panelForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.llave= localStorage.getItem('llave');
    this.usersService.getUserById(this.llave).subscribe((data:any)=>{
      this.user=data;

    })
  }

  updateUser () {
    this.usersService.updateUser(this.user.id, this.user.username, this.user.lastname, this.user.password, this.user.email, this.user.name, this.user.dni, this.user.phone).subscribe((user : User) => {
        this.usersService.createToken(user.username).subscribe((token : Token) => {
            localStorage.removeItem('token')
            console.log(localStorage.getItem('token'));
            localStorage.setItem('token', token.token)
            console.log(localStorage.getItem('token'));
            window.location.reload()
        })
    })
}

logOut () {
  this.usersService.logOut();
  this.router.navigateByUrl('/login')
}



}
