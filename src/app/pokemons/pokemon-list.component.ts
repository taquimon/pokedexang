import { Component, OnInit } from "@angular/core";
import { getPokemonImageUri } from "./mockdata";
import { pokemonColorMap } from "./pokemonColorHash";
import { Pokemon } from "../utils/types";
import { PokemonService } from "./pokemon.service"

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.less']
})

export class PokemonListComponent implements OnInit{
    pokemons: Pokemon[] = [];
    private pokemonList: Pokemon [] = [];
    search: string = '';
    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        this.pokemonList = this.pokemonService.getPokemonList();
        this.pokemons = this.pokemonList;
    }    
    
    getPokemonIdfromUrl(url: string) {
        // will divide the string "https://pokeapi.co/api/v2/pokemon/19/" into
        // 0: "https:"
        // 1: ""
        // 2: "pokeapi.co"
        // 3: "api"
        // 4: "v2"
        // 5: "pokemon"
        // 6: "1"
        // 7: ""
        const parseUrl = url.split('/'),
            id = parseUrl[parseUrl.length -2]        
        //and wi will take the position 6 it is the id            
        return +id;
    }
    
    getPokemonColor(pokemon: Pokemon) {
        const id = this.getPokemonIdfromUrl(pokemon.url);
        return pokemonColorMap[id]
    }

    getImageUri(pokemon: Pokemon) {
        const id = this.getPokemonIdfromUrl(pokemon.url);
        return getPokemonImageUri(id)
    }

    getTextColor(pokemon: Pokemon) {
        const pokemonColor = this.getPokemonColor(pokemon)
        switch(pokemonColor) {
            case '#fbf6f6':
            case '#f0f060e6':
                return 'black';
            default:
                return 'white';            
        }        
    }

    searchPokemon() {
        this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(this.search));
    }

}