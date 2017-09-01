import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyservice: SpotifyService) { }
  termino: string = '';
  ngOnInit() {

  }

  buscarArtista() {
    console.log(this.termino);
     this._spotifyservice.getArtistas(this.termino)
     .subscribe();
  }

}
