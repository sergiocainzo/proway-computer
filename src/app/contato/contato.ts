import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {

  constructor(private toastr: ToastrService, private route: Router){}

  enviarFormulario(){
    this.toastr.success("Formulário enviado com sucesso!");
    this.route.navigate(['contato']);
  }

}
