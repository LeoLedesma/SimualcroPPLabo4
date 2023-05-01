import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { BackgroundComponent } from './components/shared/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,    
    NavbarComponent,
    FooterComponent,
    BusquedaComponent,    
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
