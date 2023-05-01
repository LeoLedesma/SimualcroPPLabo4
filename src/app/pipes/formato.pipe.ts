import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {
  transform(value: any): any {    
    if (typeof value === 'number') {
      return new Intl.NumberFormat('es-ES').format(value);
    } else if (value instanceof Date) {
      return new Intl.DateTimeFormat('es-ES').format(value);
    } else if (typeof value === 'string' && value.startsWith('http')) {
      return `<a href="${value}" target="_blank" class="ver-imagen">Ver imagen</a>`;
    } else {
      return value;
    }
  }
}
