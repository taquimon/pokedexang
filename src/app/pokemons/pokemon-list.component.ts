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
    offset: number = 0;
    limit: number = 25;
    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        //this.pokemonList = this.pokemonService.getPokemonList();
        this.getPokemons();
        this.pokemons = this.pokemonList;
    }    
    
    // getPokemons(): void {
    //     this.pokemonService.getPokemonList(this.offset, this.limit)
    //     .then(data => this.pokemons = data)
    // }
    // async getPokemons(): Promise<void> {
    //     this.pokemons = await this.pokemonService.getPokemonList(this.offset, this.limit)
    // }
    getPokemons() {
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe((data: { results: Pokemon[]; }) => this.pokemons = data.results);
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

    nextPokemons(): void {
        this.offset += this.limit;
        this.getPokemons();
    }
}