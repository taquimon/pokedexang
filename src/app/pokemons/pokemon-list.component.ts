import { Component, Injectable, OnInit } from "@angular/core";
import { getPokemonImageUri } from "./mockdata";
import { pokemonColorMap } from "./pokemonColorHash";
import { Pokemon } from "../utils/types";
import { PokemonService } from "./pokemon.service"
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.less']
})
@Injectable()
export class PokemonListComponent implements OnInit{
    pokemons: Pokemon[] = [];
    generations: [] = [];
    private pokemonList: Pokemon [] = [];
    search: string = '';
    offset: number = 0;
    limit: number = 25;
    
    constructor(
        private pokemonService: PokemonService, 
        private router: ActivatedRoute,
        private route: Router
        ) {    
    }

    ngOnInit(): void {
        //this.pokemonList = this.pokemonService.getPokemonList();
        // this.getPokemons();        
        
        // const pokemons = this.router.snapshot.data['pokemons'];
        // this.pokemons = pokemons[0].results;
        // this.generations = pokemons[1].results;
        // this.pokemonList = this.pokemons;
        
        this.pokemons = this.router.snapshot.data['pokemons'].results;
        this.pokemonList = this.pokemons;
        //this.pokemons = pokemons[0].results;
    }        
      
    displayByGeneration(pokemons: Pokemon[]) {
        this.pokemons = pokemons;
    }
    getPokemons() {
        this.offset += this.limit;
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe((data: { results: Pokemon[]; }) => this.pokemons = [...this.pokemons, ...data.results]);
    }    

    searchPokemon() {
        this.pokemons = this.pokemonList.filter(item => !item.name.indexOf(this.search));
    }

    nextPokemons(): void {
        // this.offset += this.limit;
        this.getPokemons();
    }
    
    addPokemon() {
        this.route.navigate(['add-pokemon']);
    }
}