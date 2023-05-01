import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'pelicula', loadChildren: () => import('./pages/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./pages/actor/actor.module').then(m => m.ActorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
