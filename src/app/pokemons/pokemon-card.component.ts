import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../utils/types";
import { getPokemonIdfromUrl, getPokemonImageUri } from "./pokemon-helper";
import { pokemonColorMap } from "./pokemonColorHash";

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.less']
})

export class PokemonCardComponent implements OnInit {

    @Input() pokemon!: Pokemon;
    
    constructor(private router: Router) {}

    ngOnInit(): void {

    }

    getImageUri(pokemon: Pokemon) {
        //const id = this.getPokemonIdfromUrl(pokemon.url);
        //return getPokemonImageUri(id)
        return getPokemonImageUri(getPokemonIdfromUrl(pokemon.url));
    }

    getPokemonColor(pokemon: Pokemon) {
        const id = getPokemonIdfromUrl(pokemon.url);
        return pokemonColorMap[id]
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
    
    goToPokemonDetails(pokemon: Pokemon) {
        const id = getPokemonIdfromUrl(pokemon.url);
        this.router.navigate([`/pokedex/${id}`]);
       
   }
}