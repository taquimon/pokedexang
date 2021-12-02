import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { dataPokemons } from "./mockdata"
import { Observable } from "rxjs";
import { Pokemon, PokemonDetail } from "../utils/types";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient, route: Router){}             
    
    // getPokemonList(offset: number, limit: number): Promise<Pokemon[]> {
    //     return new Promise((resolve, reject) => this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    //     .subscribe(pokemon: any) => {
    //         resolve(pokemon.results);
    //     })
    //     });
    // }
    getPokemon(id:string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`) as Observable<PokemonDetail>
    }

    getPokemonList(offset: number, limit: number) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }  
    
    // getImageUri(pokemon: Pokemon) {
    //     return this.getPokemon
    // }
    
    getPokemonImageUri (id: number) {
        const imageId = ('00' + id).slice(-3); // para 1 => 001
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    }
    
    getGeneration() {
        return this.http.get('https://pokeapi.co/api/v2/generation');
    }

    getGenerationById(id: number) {
        return this.http.get(`https://pokeapi.co/api/v2/generation/${id}`);
    }
}