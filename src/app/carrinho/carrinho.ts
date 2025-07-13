import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';
import { IProdutoCarrinho } from '../produtos';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.scss',
})
export class Carrinho implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }

  comprar(){
    this.toastr.success("Compra efetuada com sucesso!");
    this.carrinhoService.comprar();
  }

  removerProtudoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }

  get totalCarrinho(): number {
    return this.itensCarrinho.reduce(
      (sum, item) => sum + item.preco * item.quantidade,
      0
    );
  }
}
