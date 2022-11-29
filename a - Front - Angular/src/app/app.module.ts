import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgChartsModule } from 'ng2-charts';
//import { JwtInterceptor } from './services/auth/interceptor.service';
import { UsuarioService } from './services/usuario.service';
//import { AuthService } from './services/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './services/auth/error.service';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    PagesModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
