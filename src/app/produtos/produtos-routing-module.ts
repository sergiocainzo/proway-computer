import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Produtos } from './produtos';

const routes: Routes = [{ path: '', component: Produtos }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
