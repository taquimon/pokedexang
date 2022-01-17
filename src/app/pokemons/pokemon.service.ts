import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { dataPokemons } from "./mockdata"
import { Observable } from "rxjs";
import { Pokemon, PokemonDetail, PokemonSpecies } from "../utils/types";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    
    constructor(private http: HttpClient, route: Router){}             
        
    getPokemon(id:string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`) as Observable<PokemonDetail>
    }

    getPokemonList(offset: number=0, limit: number=25) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }      
    
    getGeneration() {
        return this.http.get('https://pokeapi.co/api/v2/generation') as Observable<{results: []}>;
    }

    getGenerationById(id: string) {
        return this.http.get(`https://pokeapi.co/api/v2/generation/${id}`);
    }

    getPokemonSpecies(id: string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)as Observable<PokemonSpecies>;
    }    

    getPokemonStats() {
        
    }
} 