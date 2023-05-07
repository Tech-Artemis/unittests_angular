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
    path: 'date-difference',
    loadComponent: () => import('./date-difference/date-difference.component').then(c => c.DateDifferenceComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
