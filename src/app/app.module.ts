import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule } from 'ngx-socket-io';
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from './app.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { NavbarComponent } from './modulos/componentes/basica/navbar/navbar.component';
import { FooterComponent } from './modulos/componentes/basica/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACiya9u1WJZ3DBZmZcw2gUlczgoHtxC80'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true
    }),
    SocketIoModule.forRoot(environment.socketConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
