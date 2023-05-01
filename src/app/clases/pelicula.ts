import { Tipo } from "./tipo";

export class Pelicula {
    id:number = 0;
    nombre:string = ""; 
    tipo:Tipo = Tipo.Amor;   
    fechaDeEstreno: Date= new Date();
    cantidadDePublico: number = 0
    urlImagen:string = ""
    
}
