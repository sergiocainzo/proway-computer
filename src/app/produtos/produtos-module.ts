import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Produtos } from './produtos';
import { FormsModule } from '@angular/forms';
import { DetalhesProduto } from './detalhes-produto/detalhes-produto';

@NgModule({
  declarations: [Produtos, DetalhesProduto],
  imports: [CommonModule, ProdutosRoutingModule, FormsModule],
})
export class ProdutosModule {}
