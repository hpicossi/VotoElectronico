import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-gestion-user-adm',
  templateUrl: './gestion-user-adm.component.html',
  styleUrls: ['./gestion-user-adm.component.css']
})

export class GestionUserAdmComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(private userService: UsuarioService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data;
    });
  }


  //funcion borrar

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  //funcion borrar

  borrarFila(id: number) {
    if (confirm("¿Realmente quiere borrar los datos?")) {
      this.userService.deleteUser(id).subscribe(data => {
        this.cargarUsuarios();
      })
    }
  }



    //nombrar columnas
    columnas: string[] = ['usuarioid','nombre','apellido','telefono','dni','email','rol','borrar','editar'];

    //datos que se visualizaran



}

