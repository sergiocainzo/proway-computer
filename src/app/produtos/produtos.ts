import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})
export class Produtos implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private service: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtos = this.service.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();
      if (descricao) {
        this.produtos = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(descricao)
        );
        return;
      }
      this.produtos = produtos;
    });
  }
}
