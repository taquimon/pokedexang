import { Injectable } from "@angular/core";
import { dataPokemons } from "./mockdata"

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor() {}
    
    getPokemonList() {
            return dataPokemons.results;
    }
}