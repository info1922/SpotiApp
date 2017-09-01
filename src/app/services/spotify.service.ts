import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';

  constructor(private http: Http) { }

  getArtistas( termino: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAwWC0DoTrv7gAA2xKWMlPkbrv69hR66Wg7tJp8AVxuJuLNtlIP3LQg-YPHi0xB0AGdCNXoIbOmtVAkhNZeBw');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, {headers} )
    .map( res => {
      // console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
     // console.log('Esto es del servicio');
       console.log(this.artistas);
      // return res.json().artists.items;
    });
  }
}
