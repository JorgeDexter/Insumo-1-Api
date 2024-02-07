import { APIServiceService } from '../Services/apiservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonID: number = 1;
  pokemonName!: string;
  PokemonObjectID : number = 1;
  PokemoObjectName!: string;

  constructor(private apiService: APIServiceService) {}

  getPokemonID() {
    this.apiService.getPokemonID(this.pokemonID)
      .subscribe(result => {
        console.log(result);
      });

  }
  getPokemonName() {
    this.apiService.getPokemonName(this.pokemonName)
      .subscribe(result => {
        console.log(result);
      });

  }
  getPokemonObjectID() {
    this.apiService.getPokemonObjectID(this.PokemonObjectID)
      .subscribe(result => {
        console.log(result);
      });

  }
  getPokemoObjectName() {
    this.apiService.getPokemoObjectName(this.PokemoObjectName)
      .subscribe(result => {
        console.log(result);
      });

  }


}
