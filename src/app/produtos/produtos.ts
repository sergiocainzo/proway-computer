import { Component } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class Produtos {
  produtos: IProduto[] = produtos;
}
