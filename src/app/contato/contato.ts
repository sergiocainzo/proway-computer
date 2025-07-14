import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato implements OnInit {
  // Declarando o FormContato como um FormGroup
  // Usado o '!' para indicar que será inicializado no ngOnInit
  formContato!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formContato = this.criarFormularioContato();
  }

  private criarFormularioContato(): FormGroup {
    return this.fb.group({
      nome: ['', [Validators.minLength(3), Validators.required]],
      assunto: ['', [Validators.minLength(5), Validators.required]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.email, Validators.required]],
      mensagem: ['', [Validators.minLength(10), Validators.required]],
    });
  }

  enviarFormulario() {
    // Mensagem de Envio de Formulário bem sucessido.
    this.toastr.success('Formulário enviado com sucesso!');
    // Resetar o formulário
    this.formContato.reset();
    console.log('Dados do formulário:', this.formContato.value)
  }
}
