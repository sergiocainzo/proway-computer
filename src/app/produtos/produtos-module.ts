import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Produtos } from './produtos';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesProduto } from './detalhes-produto/detalhes-produto';

@NgModule({
  declarations: [Produtos, DetalhesProduto],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProdutosModule {}
