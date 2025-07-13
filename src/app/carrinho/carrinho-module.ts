import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing-module';
import { Carrinho } from './carrinho';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Carrinho],
  imports: [CommonModule, CarrinhoRoutingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrinhoModule {}
