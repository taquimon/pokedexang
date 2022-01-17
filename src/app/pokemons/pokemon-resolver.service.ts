import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { forkJoin } from "rxjs";
import { Pokemon, PokemonDetail, PokemonSpecies } from "../utils/types";
import { PokemonService } from "./pokemon.service";

@Injectable({
    providedIn: 'root'
})

// export class PokemonResolverService implements Resolve<[{results: Pokemon[]}, {results: []}]> {
//     constructor(private pokemonService: PokemonService){}

//     resolve(route: ActivatedRouteSnapshot) {
//         const id = route.paramMap.get('id') || '1';
//         return forkJoin([
//            this.pokemonService.getPokemon(id),
//            this.pokemonService.getGeneration()
//         ]);
        
//     }
// }

export class PokemonResolverService implements Resolve<PokemonDetail> {
    constructor(private pokemonService: PokemonService){}

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id') || '1';
        return this.pokemonService.getPokemon(id);                   
    }
}