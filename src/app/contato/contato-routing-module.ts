import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contato } from './contato';

const routes: Routes = [{ path: '', component: Contato }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
