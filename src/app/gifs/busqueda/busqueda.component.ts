import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }

  public buscar() {
    const value: string = this.txtBuscar.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }
    console.log(value);
    this.txtBuscar.nativeElement.value = '';
    this.gifsService.buscarGifs(value);
  }
}
