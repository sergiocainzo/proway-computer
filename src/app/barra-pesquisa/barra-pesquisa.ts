import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  standalone: false,
  templateUrl: './barra-pesquisa.html',
  styleUrl: './barra-pesquisa.scss',
})
export class BarraPesquisa {
  descricao= "";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscar() {
    if (this.descricao) {
      this.router.navigate(['/produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }
    this.router.navigate(['produtos'])
  }
}
