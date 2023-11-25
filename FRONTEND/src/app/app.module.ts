import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { UsersService } from './services/users.service';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/users/registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    VisualizarComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
