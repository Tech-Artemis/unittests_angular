import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  {
    path: 'signals',
    loadComponent: () => import('./signals-teste/signals-teste.component').then(c => c.SignalsTesteComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
