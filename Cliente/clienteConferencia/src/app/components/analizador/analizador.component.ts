import { Component, OnInit } from '@angular/core';
import { entrada } from 'src/app/models/entrada';
import { ParserService } from '../../services/parser.service';

@Component({
  selector: 'app-analizador',
  templateUrl: './analizador.component.html',
  styleUrls: ['./analizador.component.css']
})
export class AnalizadorComponent implements OnInit {

  entradaanalizar: entrada={
    operaciones : "operar<5+3>; operar<5*3>; operar<5-3>; operar<5+3*2>; operar<5+3*1>;"
  };
  constructor(private parserService: ParserService) { }

  ngOnInit(): void {
  }

  analizaEntrada(){
    console.log(this.entradaanalizar);
    this.parserService.PostRequest(this.entradaanalizar)
    .subscribe(
      res=>{
        console.log(res);
        alert(res.resultado);
      },
      err=> console.log(err)
    )
  }

}
