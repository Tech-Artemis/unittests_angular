import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cep', pathMatch: 'full' },
  {
    path: 'cep',
    loadComponent: () => import('./find-cep/find-cep.component').then(c => c.FindCepComponent),
  },
  {
    path: 'paises',
    loadComponent: () => import('./list-countries/list-countries.component').then(c => c.ListCountriesComponent),
  },
  {
    path: 'contador',
    loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent),
  },
  {
    path: 'diferenca-datas',
    loadComponent: () => import('./date-difference/date-difference.component').then(c => c.DateDifferenceComponent),
  },
  {
    path: 'tic-tac-toe',
    loadComponent: () => import('./tic-tac-toe/tic-tac-toe.component').then(c => c.TicTacToeComponent),
  },

  {
    path: '**', redirectTo: 'cep', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
    },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
