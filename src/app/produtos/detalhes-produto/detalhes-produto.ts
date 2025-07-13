import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos-service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoService } from '../../carrinho-service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: false,
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.scss',
})
export class DetalhesProduto implements OnInit {
  produtos: IProduto | undefined;
  quantidade = 1;

  constructor(
    private service: ProdutosService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private carrinho: CarrinhoService
  ) {}

  ngOnInit(): void {
    // Coleta o parametro da Rota
    const routeParams = this.route.snapshot.paramMap;

    // Pega o valor do ID do produto e converte para numero
    const produtoId = Number(routeParams.get('id'));

    // Passa o ID do produto coletado para o metodo personalizado do Service para realizar a coleta do produto
    this.produtos = this.service.getOne(produtoId);
  }

  adicionarCarrinho() {
    const produto: IProdutoCarrinho = {
      ...this.produtos!,
      quantidade: this.quantidade,
    };
    if (this.quantidade > 1) {
      this.toastr.success(
        `${this.produtos?.descricao},adicionados com sucesso!`
      );
    } else {
      this.toastr.success(
        `${this.produtos?.descricao},adicionado com sucesso!`
      );
    }
    this.carrinho.adicionarAoCarrinho(produto);
  }
}
