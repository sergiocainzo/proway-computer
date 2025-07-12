import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos-service';
import { IProduto } from '../../produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  standalone: false,
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.scss',
})
export class DetalhesProduto implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private service: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Coleta o parametro da Rota
    const routeParams = this.route.snapshot.paramMap;

    // Pega o valor do ID do produto e converte para numero
    const produtoId = Number(routeParams.get("id"));

    // Passa o ID do produto coletado para o metodo personalizado do Service para realizar a coleta do produto
    this.produto = this.service.getOne(produtoId);
  }

}
