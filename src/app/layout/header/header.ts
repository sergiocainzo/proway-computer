import { Component } from '@angular/core';
import { CarrinhoService } from '../../carrinho-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public carrinhoService: CarrinhoService) {}

}
