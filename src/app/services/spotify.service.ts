import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda = 'https://api.spotify.com/v1/search';
  urlArtista = 'https://api.spotify.com/v1/artists';
  constructor(private http: Http) { }

  getArtistas( termino: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCdYL4bcW5EsSoCya41MhbZqoCNd3EDN1qKTPo0sE2sSms1RZL4kzszqC2mjdUgqRXNjC4BirGFkIsmuEWpGg');

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

// Obtener un artista
  getArtista( id: string) {

        let headers = new Headers();
        headers.append('authorization', 'Bearer BQCdYL4bcW5EsSoCya41MhbZqoCNd3EDN1qKTPo0sE2sSms1RZL4kzszqC2mjdUgqRXNjC4BirGFkIsmuEWpGg');

        let query = `/${ id }`;
        let url = this.urlArtista + query;

        return this.http.get( url, {headers} )
        .map( res => {
           console.log(res.json());
           return res.json();
        //  this.artistas = res.json().artists.items;
         // console.log('Esto es del servicio');
         //  console.log(this.artistas);
          // return res.json().artists.items;
        });
      }

      // Obtener las canciones
  getTop( id: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCdYL4bcW5EsSoCya41MhbZqoCNd3EDN1qKTPo0sE2sSms1RZL4kzszqC2mjdUgqRXNjC4BirGFkIsmuEWpGg');
    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

      return this.http.get( url, {headers} )
          .map( res => {
          console.log(res.json().tracks);
            return res.json().tracks;
            //  this.artistas = res.json().artists.items;
             // console.log('Esto es del servicio');
             //  console.log(this.artistas);
              // return res.json().artists.items;
          });
    }
}
