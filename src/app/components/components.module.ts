import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { FormatoPipe } from '../pipes/formato.pipe';
import { DetallesComponent } from './detalles/detalles.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';



@NgModule({
  declarations: [
    TablaComponent,
    TablaPeliculaComponent,
    FormatoPipe,
    DetallesComponent,
    DetallesPeliculaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TablaComponent,
    TablaPeliculaComponent,
    FormatoPipe,
    DetallesPeliculaComponent
  ]
})
export class ComponentsModule { }
