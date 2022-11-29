import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm: string = '';

  show: boolean = false;
  llave: any;
  cartItems: CartItem[] = [];
  roluser: any;
  estaAutenticado: boolean = false;

  toggleCollapse() {
    this.show = !this.show;
  }

  constructor(
    private router: Router,
    private cartService: CartItemsService,
    private authService: UsuarioService,
    private cartService1: CartService
  ) {}

  ngOnInit(): void {
    //  this.cartService.getProducts().subscribe((res) => {
    //  this.totalItem = res.length;
    //});

    this.authService.estaAutenticado.subscribe(
      (res) => (this.estaAutenticado = res)
    );

    this.llave = localStorage.getItem('llave');
    this.cartService
      .getUserCart(this.llave != null ? this.llave : 0)
      .subscribe((cartItems: CartItem[]) => {
        this.cartItems = cartItems;
        this.totalItem = cartItems.length;
      });
  }

  onCerrarSesion() {
    this.authService.logOut();
    this.estaAutenticado = false;
    this.router.navigate(['/login']);
  }

  irPanel() {
    this.roluser = this.llave = localStorage.getItem('role');
    if (this.roluser == 'ADMIN') {
      this.router.navigate(['/dash-adm']);
    } else {
      this.router.navigate(['/dash-usr']);
    }
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService1.search.next(this.searchTerm);
  }
}
