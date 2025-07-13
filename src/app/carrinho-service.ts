import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // Atributo de Itens do Carrinho
  itens: IProdutoCarrinho[] = [];

  // Constructor
  constructor(private toastr: ToastrService, private router: Router) {}

  // Metodos Personalizados
  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter((item) => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
    this.toastr.error('Produto removido com sucesso!');
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
    this.router.navigate(['carrinho']);
  }

  comprar() {
    this.limparCarrinho();
    this.router.navigate(['produtos']);
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
