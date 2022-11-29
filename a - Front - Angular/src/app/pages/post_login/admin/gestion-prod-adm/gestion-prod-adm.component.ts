import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-gestion-prod-adm',
  templateUrl: './gestion-prod-adm.component.html',
  styleUrls: ['./gestion-prod-adm.component.css']
})
export class GestionProdAdmComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  constructor(private productoService: ProductsService) { }

  ngOnInit(): void {

    //this.dataSource = new MatTableDataSource<Producto>(this.datos);
    this.dataSource.paginator = this.paginator;
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProducts().subscribe(data => {
      for (let product of data) {
        product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
        "../../../../assets/images/product-placeholder.png";
      }
    this.dataSource.data = data;
    console.log(data);
    })
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  borrarFila(id: number) {
    if (confirm("¿Realmente quiere borrar los datos?")) {
      this.productoService.deleteProduct(id).subscribe(data => {
        this.cargarProductos();
      })
    }
  }

  columnas: string[] = ['productoid','nombre','descripcion','precio','imagen','categoria','borrar','editar'];

  // datos: Producto[] =
  //     [new Producto(1,'Votacion gratuita','Hasta 10 votantes',0,'','gratuito',),
  //     new Producto(2,'Votacion estandar','Hasta 50 votantes',1000,' ','pago',),
  //     new Producto(3,'Votacion premium','Votantes ilimitados',2000,' ','pago',),]
  //   dataSource: any;

  //   Productoselect: Producto = new Producto(1,'a','b',123,'c','d',);

  //   @ViewChild(MatTable) tabla3!: MatTable<Producto>;
    //@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

}

// export class Producto {
//   constructor(
//     public productoid: number,
//     public nombre: string,
//     public descripcion: string,
//     public precio: number,
//     public imagen: any,
//     public categoria: string,
//     ) {
//   }
//}
