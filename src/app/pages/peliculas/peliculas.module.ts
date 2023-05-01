import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { TablaPeliculaComponent } from 'src/app/components/tabla-pelicula/tabla-pelicula.component';
import { ListadoComponent } from './listado/listado.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [    
    ListadoComponent,    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PeliculasRoutingModule,        
  ]
})
export class PeliculasModule { }
