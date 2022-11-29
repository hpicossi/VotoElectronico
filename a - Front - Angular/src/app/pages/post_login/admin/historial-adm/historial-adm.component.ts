import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historial-adm',
  templateUrl: './historial-adm.component.html',
  styleUrls: ['./historial-adm.component.css'],
})

export class HistorialAdmComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //funcion para cargar los datos de la variable datos en la tabla
      this.dataSource = new MatTableDataSource<Historial>(this.datos);
      this.dataSource.paginator = this.paginator;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

    //nombrar columnas
    columnas: string[] = ['campo1','campo2','campo3','campo4'];

    //datos que se visualizaran
    datos: Historial[] =
      [new Historial('dato1','dato2','dato3','dato4'),
      new Historial('a','b','c','d',),
      new Historial('a','b','c','d',),]
    dataSource: any;
  
    Usuarioselect: Historial = new Historial('a','b','c','d',);
  
    @ViewChild(MatTable) tabla3!: MatTable<Historial>;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
}

export class Historial{
  constructor(
    public campo1: string,
    public campo2: string,
    public campo3: string,
    public campo4: string,
    ){
  }
}
