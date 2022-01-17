import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Pokemon } from "../utils/types";
import { getPokemonImageUri } from "./mockdata";
import { PokemonService } from "./pokemon.service";

@Component({
    selector: 'pokemon-generation',
    templateUrl: './pokemon-generation.component.html',
    styleUrls: ['./pokemon-generation.component.less']
})
export class PokemonGenerationComponent implements OnInit {

    @Output() refreshPokemons = new EventEmitter<Pokemon[]>();
    constructor (private pokemonService: PokemonService) {}
    
    generationName:string = '';
    selectedGame:string = '';
    games: {name: string, url:string}[] = [];

    ngOnInit() {

    }

    chooseGame() {
        const id = getPokemonImageUri(this.selectedGame);
        this.pokemonService.getGenerationById(id)
        .subscribe((pokemons: any) => {            
            this.generationName = pokemons.main_region.name;
            this.refreshPokemons.emit(pokemons.pokemon_species);
        })
    }
}
