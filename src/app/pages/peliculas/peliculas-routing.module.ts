import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: 'altas', component: AltasComponent },
  { path: 'listado', component: ListadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
