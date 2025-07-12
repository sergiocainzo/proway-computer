import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Produtos } from './produtos';
import { DetalhesProduto } from './detalhes-produto/detalhes-produto';

const routes: Routes = [
  { path: '', component: Produtos },
  { path: ':id', component: DetalhesProduto },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
