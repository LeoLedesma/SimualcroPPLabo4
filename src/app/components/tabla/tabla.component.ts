import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent<T> {
  @Input() titulos: any;
  @Input() filas: any;
  @Output() onParentElement: EventEmitter<T> = new EventEmitter;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(item:T){  
    this.onParentElement.emit({...item});
}
}
