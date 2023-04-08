import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  constructor() { }

  
  public get historial() : string[] {
    return  [...this._historial];
  }

  public buscarGifs(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }
  
}
