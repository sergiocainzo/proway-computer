import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing-module';
import { Contato } from './contato';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [Contato],
  imports: [CommonModule, ContatoRoutingModule, ReactiveFormsModule,NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
})
export class ContatoModule {}
