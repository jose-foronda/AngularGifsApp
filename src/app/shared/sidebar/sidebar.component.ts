import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html' 
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  
  public get historial() : string[] {
    return this.gifsService.historial;
  }
  
  public buscar(historia: string) {
    console.log(historia);
    this.gifsService.buscarGifs(historia);
  }
}
