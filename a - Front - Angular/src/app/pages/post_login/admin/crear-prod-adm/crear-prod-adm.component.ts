import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Product } from 'src/app/models/Product';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductsService } from 'src/app/services/products.service';
//import { Producto } from '../gestion-prod-adm/gestion-prod-adm.component';

interface categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-prod-adm',
  templateUrl: './crear-prod-adm.component.html',
  styleUrls: ['./crear-prod-adm.component.css']
})
export class CrearProdAdmComponent implements OnInit {
  contactForm: FormGroup;

  /*producto: Producto = new Producto();*/

  idProducto?: any;
  producto: Product = new Product();
  error : string="";
  categorias: Categoria[];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {
    this.contactForm = this.fb.group({
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    });
    this.categorias = [];
  }

  ngOnInit(): void {
    console.log(this.contactForm);
    this.cargarCategorias();
    this.idProducto = this.route.snapshot.paramMap.get('id');
    console.log('idProducto', this.idProducto)
    if (this.idProducto) {
      let token = localStorage.getItem('token');
      if (token) {
        this.router.navigateByUrl('editpro-adm/' + this.idProducto);
        this.productoService.getProduct(this.idProducto).subscribe(data => {
          this.producto = data;
          this.url = data.imageUrl = data.image ? 'data:image/jpeg;base64,' + data.image :
          "../../../../assets/images/product-placeholder.png";
          const contenedorTituloProducto: HTMLElement = document.getElementById('tituloProducto') as HTMLElement;
          const contenedorBotonProducto: HTMLElement = document.getElementById('botonProducto') as HTMLElement;
          const contenedorListaCategorias: HTMLElement = document.getElementById('categoria') as HTMLElement;
          contenedorTituloProducto.innerHTML = 'EDITAR PRODUCTO';
          contenedorBotonProducto.innerHTML = 'GUARDAR CAMBIOS';
          this.contactForm.get('categoria')?.setValue(data.category.id);
        })
      }
      else {
        this.router.navigateByUrl('/register');
      }

      /*this.productoService
        .ObtenerLibroId(parseInt(this.idProducto))
        .subscribe((data) => {
          this.producto = data;
          const contenedor: HTMLElement = document.getElementById(
            'tituloLibro'
          ) as HTMLElement;
          contenedor.innerHTML = 'Editar Producto';
        });*/
    }
  }

  cargarCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log(this.categorias);
      this.categorias = data;
    }, (error : ErrorEvent) => {
      this.error = error.error
    });
  }

  onEnviar(event: Event, producto: Product): void {
    event.preventDefault;

    if (this.contactForm.valid || 1==1) {

      console.log(producto);
      console.log('Botón enviar');

      if (this.idProducto) {
        console.log('Entra a if');
        this.productoService.updateProduct(this.producto.id, this.producto.name, this.producto.description, this.producto.price, this.producto.image, this.producto.category)
        .subscribe((data)=> {
          console.log(producto);
          this.router.navigateByUrl('/gestionpro-adm');
        }, (error : ErrorEvent) => {
          this.error = error.error
        })
      }
      else {
        console.log('Entra a else');
        this.productoService.createProduct(this.producto.name, this.producto.description, this.producto.price, this.producto.image, this.producto.category)
        .subscribe((data) =>{
          this.router.navigateByUrl('/gestionpro-adm');
        }, (error : ErrorEvent) => {
          this.error = error.error
        })

      }
    }
  }

  obtenerCategoria(id: string) {
    console.log(this.categorias.filter(x => x.id === parseInt(id))[0]);
    console.log(this.categorias);
    this.producto.category = this.categorias.filter(x => x.id === parseInt(id))[0];
  }

  //   if (this.idProducto) {
  //     this.productoService.EditarLibro(producto.subscribe((data) => {
  //       alert('El libro ha sido editado satisfactoriamente.');
  //     });
  //   } else {
  //     if (this.contactForm.valid) {
  //       console.log(producto);
  //       this.libroService.onCrearRegistro(producto).subscribe((data) => {
  //         alert('El producto ha sido agregado satisfactoriamente.');
  //       });
  //     } else {
  //       this.contactForm.markAllAsTouched();
  //     }
  //   }
  // }



	url: any;
	msg = "";

	selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
      var strImage = (this.url).replace(/^data:image\/[a-z]+;base64,/, "");
      this.producto.image = strImage;
		}
	}

  selectedValue: string | undefined;

  // categorias: categoria[] = [
  //   {value: 'gratuito-0', viewValue: 'Gratuita'},
  //   {value: 'pago-1', viewValue: 'Pago'},
  // ];

  get Nombre() {
    return this.contactForm.get("nombre");
  }

  get Descripcion() {
    return this.contactForm.get("descripcion");
  }

  get Categoria() {
    return this.contactForm.get("categoria");
  }

  get Precio() {
    return this.contactForm.get("precio");
  }

  get NombreValid() {
    return this.Nombre?.touched && this.Nombre.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && this.Descripcion.valid;
  }

  get CategoriaValid() {
    return this.Categoria?.touched && this.Categoria.valid;
  }

  get PrecioValid() {
    return this.Precio?.touched && this.Precio.valid;
  }

}
