import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { SearchGifsResponse, Images, Data } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'NT7z0zZdW4eFRPOWP67xTA7NijBh1euQ';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  
  public resultados: Data[] = [];

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    //   // this.buscarGifs(this._historial[0]);
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

    const params = new HttpParams()
              .set('api_key', this._apiKey)
              .set('limit', '10')
              .set('q', query);

    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`, { params })
      .subscribe((res: SearchGifsResponse) => {
        console.log(res.data);
        this.resultados = res.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });
 
  }
  
}
