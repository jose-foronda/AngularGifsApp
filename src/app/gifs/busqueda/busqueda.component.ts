import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  public buscar() {
    const value: string = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
