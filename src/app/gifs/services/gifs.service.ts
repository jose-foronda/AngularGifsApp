import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'NT7z0zZdW4eFRPOWP67xTA7NijBh1euQ';
  private _historial: string[] = [];
  
  public resultados: any[] = [];

  constructor(private http: HttpClient) { }

  
  public get historial() : string[] {
    return  [...this._historial];
  }

  public buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    
    console.log(this._historial);

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=NT7z0zZdW4eFRPOWP67xTA7NijBh1euQ&q=${query}&limit=10`)
      .subscribe((res: any) => {
        console.log(res.data);
        this.resultados = res.data;
    });
 
  }
  
}
