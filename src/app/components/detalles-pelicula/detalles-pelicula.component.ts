import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
})
export class DetallesPeliculaComponent {

  @Input() entidad!: Pelicula;
  @Input() onlyView:boolean = true;

  titulos: string[] = ["ID", "Nombre","Tipo","Fecha de estreno", "Cant. Publico", "Imagen"]

}
