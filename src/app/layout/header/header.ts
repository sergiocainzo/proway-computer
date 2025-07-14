import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../carrinho-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  searching: string = '';

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  buscar(valor: any) {
    this.router.navigate(['/produtos'], {
      queryParams: { descricao: valor.descricao },
    });
  }
}
