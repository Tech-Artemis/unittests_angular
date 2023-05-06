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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
