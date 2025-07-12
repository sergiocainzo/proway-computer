import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos-service';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})
export class Produtos implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(private service: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.service.getAll();
  }
}
