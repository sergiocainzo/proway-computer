import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Produtos } from './produtos';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Produtos],
  imports: [CommonModule, ProdutosRoutingModule, FormsModule],
})
export class ProdutosModule {}
