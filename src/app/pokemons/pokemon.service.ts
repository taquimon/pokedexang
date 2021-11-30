import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { dataPokemons } from "./mockdata"
import { Observable } from "rxjs";
import { Pokemon } from "../utils/types";


@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient){}             
    
    // getPokemonList(offset: number, limit: number): Promise<Pokemon[]> {
    //     return new Promise((resolve, reject) => this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    //     .subscribe(pokemon: any) => {
    //         resolve(pokemon.results);
    //     })
    //     });
    // }

    getPokemonList(offset: number, limit: number) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }   
}