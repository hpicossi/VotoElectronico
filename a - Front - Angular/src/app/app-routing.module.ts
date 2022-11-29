import { NgModule, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SectionComercialComponent } from './pages/section-comercial/section-comercial.component';
import { ToolbarAdmComponent } from './pages/post_login/admin/toolbar-adm/toolbar-adm.component';
import { DashboardAdmComponent } from './pages/post_login/admin/dashboard-adm/dashboard-adm.component';
import { CrearProdAdmComponent } from './pages/post_login/admin/crear-prod-adm/crear-prod-adm.component';
import { CrearUsrAdmComponent } from 'src/app/pages/post_login/admin/crear-usr-adm/crear-usr-adm.component';
import { GestionProdAdmComponent } from './pages/post_login/admin/gestion-prod-adm/gestion-prod-adm.component';
import { GestionUserAdmComponent } from './pages/post_login/admin/gestion-user-adm/gestion-user-adm.component';
import { HistorialAdmComponent } from './pages/post_login/admin/historial-adm/historial-adm.component';
import { PanelUserAdmComponent } from './pages/post_login/admin/panel-user-adm/panel-user-adm.component';
import { ToolbarUserComponent } from './pages/post_login/user/toolbar-user/toolbar-user.component';
import { DashboardUserComponent } from './pages/post_login/user/dashboard-user/dashboard-user.component';
import { CompraUserComponent } from './pages/post_login/user/compra-user/compra-user.component';
import { HistorialUserComponent } from './pages/post_login/user/historial-user/historial-user.component';
import { PanelUserUserComponent } from './pages/post_login/user/panel-user-user/panel-user-user.component';
import { PagarComponent } from './pages/pagar/pagar.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-user/:userId', component: CrearUsrAdmComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent },
  { path: 'section-comercial', component: SectionComercialComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pagar', component: PagarComponent },
  //ruta admin
  { path: 'toolbar-adm', component: ToolbarAdmComponent},
  { path: 'dash-adm', component: DashboardAdmComponent, canActivate: [AuthGuard]},
  { path: 'crearpro-adm', component: CrearProdAdmComponent,canActivate: [AuthGuard] },
  { path: 'editpro-adm/:id', component: CrearProdAdmComponent },
  { path: 'crearusr-adm', component: CrearUsrAdmComponent },
  { path: 'gestionpro-adm', component: GestionProdAdmComponent,canActivate: [AuthGuard] },
  { path: 'gestionuser-adm', component: GestionUserAdmComponent,canActivate: [AuthGuard] },
  { path: 'historial-adm', component: HistorialAdmComponent },
  { path: 'panel-adm', component: PanelUserAdmComponent},
  //ruta user
  { path: 'toolbar-usr', component: ToolbarUserComponent,canActivate: [AuthGuard] },
  { path: 'dash-usr', component: DashboardUserComponent,canActivate: [AuthGuard] },
  { path: 'compra-usr', component: CompraUserComponent,canActivate: [AuthGuard] },
  { path: 'historial-usr', component: HistorialUserComponent,canActivate: [AuthGuard] },
  { path: 'panel-usr', component: PanelUserUserComponent, canActivate: [AuthGuard] },
  //dejar siempre al ultimo por que entra a la pagina de error si no esta contemplada
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
