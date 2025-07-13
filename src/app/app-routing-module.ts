import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos-module').then((m) => m.ProdutosModule),
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho-module').then(m => m.CarrinhoModule) },
  { path: '**', component: PaginaNaoEncontrada },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
