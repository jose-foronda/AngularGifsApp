import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Images, Data } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'NT7z0zZdW4eFRPOWP67xTA7NijBh1euQ';
  private _historial: string[] = [];
  
  public resultados: Data[] = [];

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  
  public get historial() : string[] {
    return  [...this._historial];
  }

  public buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    
    console.log(this._historial);

    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=NT7z0zZdW4eFRPOWP67xTA7NijBh1euQ&q=${query}&limit=10`)
      .subscribe((res: SearchGifsResponse) => {
        console.log(res.data);
        this.resultados = res.data;
    });
 
  }
  
}
