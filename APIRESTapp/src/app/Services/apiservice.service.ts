import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  
  constructor(private http: HttpClient) { }
  
  getPokemonID(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  getPokemonName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  getPokemonObjectID(id : number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  getPokemoObjectName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

}

