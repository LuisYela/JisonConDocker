import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { AnalizadorComponent } from './components/analizador/analizador.component';
import { FormsModule } from '@angular/forms';

import {ParserService} from './services/parser.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SaludoComponent,
    AnalizadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
