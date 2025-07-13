import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [App, Header, Footer, PaginaNaoEncontrada],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000, // Tempo de exibição da mensagem.
      preventDuplicates: true, // Evita a duplicidade de mensagens na tela
      enableHtml: true, // Habilita as tags HTML dentro do toastr
    }),
    BrowserAnimationsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [App],
})
export class AppModule {}
