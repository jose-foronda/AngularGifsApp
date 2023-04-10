import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Data } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private gifsService: GifsService) {

  }
  
  public get resultados(): Data[] {
    return this.gifsService.resultados;
  }

}
