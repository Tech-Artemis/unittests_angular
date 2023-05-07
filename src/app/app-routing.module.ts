import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cep', pathMatch: 'full' },
  {
    path: 'cep',
    loadComponent: () => import('./busca-cep/busca-cep.component').then(c => c.BuscaCepComponent),
  },
  {
    path: 'paises',
    loadComponent: () => import('./lista-paises/lista-paises.component').then(c => c.ListaPaisesComponent),
  },
  {
    path: 'contador',
    loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
