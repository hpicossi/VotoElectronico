import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { LayoutModule } from '../layout/layout.module';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SectionComercialComponent } from './section-comercial/section-comercial.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarAdmComponent } from './post_login/admin/toolbar-adm/toolbar-adm.component';
import { DashboardAdmComponent } from './post_login/admin/dashboard-adm/dashboard-adm.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { GestionProdAdmComponent } from './post_login/admin/gestion-prod-adm/gestion-prod-adm.component';
import { CrearProdAdmComponent } from './post_login/admin/crear-prod-adm/crear-prod-adm.component';
import { GestionUserAdmComponent } from './post_login/admin/gestion-user-adm/gestion-user-adm.component';
import { HistorialAdmComponent } from './post_login/admin/historial-adm/historial-adm.component';
import { PanelUserAdmComponent } from './post_login/admin/panel-user-adm/panel-user-adm.component';
import { ToolbarUserComponent } from './post_login/user/toolbar-user/toolbar-user.component';
import { DashboardUserComponent } from './post_login/user/dashboard-user/dashboard-user.component';
import { PanelUserUserComponent } from './post_login/user/panel-user-user/panel-user-user.component';
import { HistorialUserComponent } from './post_login/user/historial-user/historial-user.component';
import { CompraUserComponent } from './post_login/user/compra-user/compra-user.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './post_login/admin/dashboard-adm/components/line-chart/line-chart.component';
import { BarChartComponent } from './post_login/admin/dashboard-adm/components/bar-chart/bar-chart.component';
import { MatTableModule } from '@angular/material/table';
import { CartComponent } from './cart/cart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { CrearUsrAdmComponent } from './post_login/admin/crear-usr-adm/crear-usr-adm.component';
import { PagarComponent } from './pagar/pagar.component';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    SectionComercialComponent,
    LogoutComponent,
    ToolbarAdmComponent,
    DashboardAdmComponent,
    GestionProdAdmComponent,
    CrearProdAdmComponent,
    GestionUserAdmComponent,
    HistorialAdmComponent,
    PanelUserAdmComponent,
    ToolbarUserComponent,
    DashboardUserComponent,
    PanelUserUserComponent,
    HistorialUserComponent,
    CompraUserComponent,
    LineChartComponent,
    BarChartComponent,
    CartComponent,
    CrearUsrAdmComponent,
    PagarComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    SectionComercialComponent,
    NgChartsModule,
    ToolbarAdmComponent,
    DashboardAdmComponent,
    CrearProdAdmComponent,
    GestionProdAdmComponent,
    GestionUserAdmComponent,
    HistorialAdmComponent,
    PanelUserAdmComponent,
    CompraUserComponent,
    DashboardUserComponent,
    HistorialUserComponent,
    PanelUserUserComponent,
    ToolbarUserComponent,
  ],
})
export class PagesModule {}
