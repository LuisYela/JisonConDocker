import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludoComponent } from './components/saludo/saludo.component'
import { AnalizadorComponent } from './components/analizador/analizador.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/saludar',
    pathMatch: 'full'
  },
  {
    path:'saludar',
    component: SaludoComponent
  },
  {
    path:'analizador',
    component: AnalizadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
