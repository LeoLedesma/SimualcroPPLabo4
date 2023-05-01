import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { Tipo } from 'src/app/clases/tipo';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
})
export class TablaPeliculaComponent implements OnInit {
  titulos: string[] = ["ID", "Nombre","Tipo","Fecha de estreno", "Cant. Publico", "Imagen"]


  public peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Drama',
      tipo: Tipo.Amor,
      fechaDeEstreno: new Date(2023,4,10),
      cantidadDePublico: 481,
      urlImagen: "https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581001437_album_normal.jpg"
    },
    {
      id: 2,
      nombre: 'Crime|Drama|Thriller',
      tipo: Tipo.Comedia,
      fechaDeEstreno: new Date(2023,4,10),
      cantidadDePublico: 687,
      urlImagen: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/83980.jpg"
    },
    {
      id: 3,
      nombre: 'Action|Animation',
      tipo: Tipo.Comedia,
      fechaDeEstreno: new Date(2023,4,10),
      cantidadDePublico: 298,
      urlImagen: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/83980.jpg'
    }
  ];
  
  @Input() onParentElement: EventEmitter<Pelicula> = new EventEmitter
  @Output() onChildElement: EventEmitter<Pelicula> = new EventEmitter

  ngOnInit() {    
    console.log("Hola");
    this.onParentElement.subscribe((evento: Pelicula) => {      
      this.onRowClick(evento);
    });
  }

  onRowClick(item:Pelicula){        
    this.onChildElement.emit({...item});
}
}
