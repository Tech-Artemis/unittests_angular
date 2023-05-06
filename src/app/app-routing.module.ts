import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  {
    path: 'signals',
    loadComponent: () => import('./signals-teste/signals-teste.component').then(c => c.SignalsTesteComponent),
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
