import { Component, OnInit } from '@angular/core';

import{ ParserService } from '../../services/parser.service'

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  saludo="";
  constructor(private gameService: ParserService) { }

  ngOnInit(): void {
    this.gameService.getSaludo().subscribe(
      res => {
        this.saludo=res.saludo;
      },
      err => console.error(err)
    );
  }

}
