import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent{
  @Input() titulos: any;  
  @Input() entidad:any;
  @Input() onlyView: boolean = false;
  objectKeys = Object.keys;
}
