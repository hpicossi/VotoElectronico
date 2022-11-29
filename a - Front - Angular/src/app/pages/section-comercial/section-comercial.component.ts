import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
  selector: 'app-section-comercial',
  templateUrl: './section-comercial.component.html',
  styleUrls: ['./section-comercial.component.css'],
})
export class SectionComercialComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm: string = '';
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  imagen: any;
  llave: any;
  public user: User = new User();
  public product: Product = new Product();

  public isProductInCart: boolean = false;
  constructor(
    private api: ProductsService,
    private cartService: CartService,
    private sanitizer: DomSanitizer,
    private cartItemsService: CartItemsService,
    private usersService: UsuarioService,
    private cartService1: CartService
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;

      for (let product of this.productList) {
        product.imageUrl = product.image
          ? 'data:image/jpeg;base64,' + product.image
          : '../../../../assets/images/product-placeholder.png';
        this.getCartItem(product.id);
      }

      this.productList.forEach((a: any) => {
        if (a.category.description === 'gratis') {
          a.category = 'gratis';
        }
        if (a.category.description === 'pago') {
          a.category = 'pago';
        }
        let objectURL = 'data:image/png;base64,' + a.image;
        this.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }

  addToCart(id: Number) {
    this.llave = localStorage.getItem('llave');
    this.cartItemsService
      .addToUserCart(this.llave != null ? this.llave : 0, id.toString())
      .subscribe((res) => {
        this.getCartItem(id);
      });
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  getCartItem(id: Number) {
    this.cartItemsService
      .getCartItem(this.user.id.toString(), id.toString())
      .subscribe(
        (res) => {
          this.isProductInCart = true;
        },
        (error: ErrorEvent) => {
          this.isProductInCart = false;
        }
      );
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService1.search.next(this.searchTerm);
  }
}
