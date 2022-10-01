import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
