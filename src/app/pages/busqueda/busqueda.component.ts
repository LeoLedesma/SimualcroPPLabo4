import { Component } from '@angular/core';
import { PeliculasModule } from '../peliculas/peliculas.module';
import { TablaPeliculaComponent } from 'src/app/components/tabla-pelicula/tabla-pelicula.component';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  public entityFromEvent!:any;
  onChildElement($event:any):void{        
    this.entityFromEvent = $event;
  }
}
