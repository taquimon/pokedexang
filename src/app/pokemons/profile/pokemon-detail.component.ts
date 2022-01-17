import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PokemonDetail, PokemonSpecies } from "src/app/utils/types";
import { PokemonService } from "../pokemon.service";
import { Location } from '@angular/common';
import { pokemonTypeColorMap } from "./pokemonColorHashType";
import { pokemonImageHash } from "./pokemonImageColorHash";
import { getPokemonImageUri } from "../pokemon-helper";

@Component({
    selector: 'pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.less']
})

export class PokemonDetailComponent implements OnInit, OnDestroy {
    [x: string]: any;
    id: string = '1';
    pokemonDetail?: PokemonDetail;
    pokemonSpecies?: any;
    pokemonStats?: any[];
    gameDescriptions?: any;
    language: string = 'en';
    statsData: any[] = [];
    pokemonSpeciesSubscription?: Subscription;
    pokemonDetailSubscription?: Subscription;

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        const details = this.route.snapshot.data['pokemon'];
        const detailStats = this.route.snapshot.data['pokemon'];
        // console.log(details);
        // this.pokemonDetail = details[0] || {};
        this.pokemonDetail = details || {};
        console.log(details);
        // this.pokemonSpecies = details[1] || {};
        // this.gameDescriptions = this.filterDescriptionByLanguage(this.pokemonSpecies);
        this.id = `${details.id}`;

        
        this.pokemonStats = detailStats.stats;        

        for (let val of this.pokemonStats!) {        
            let p = { "name": val.stat.name, "value": val.base_stat };            
            this.statsData.push(p);

        }
        
        console.log(JSON.parse(JSON.stringify(this.statsData)));

        this.pokemonSpeciesSubscription = this.pokemonService.getPokemonSpecies(this.id).subscribe((pokemonSpecies: any) => {
            this.pokemonSpecies = pokemonSpecies;
            this.gameDescriptions = this.filterDescriptionByLanguage(pokemonSpecies);            
        });
    }

    filterDescriptionByLanguage(species: PokemonSpecies) {
        return species.flavor_text_entries.filter((item: any) =>
            item.language.name === this.language);
    }

    getGameImage(name: string) {
        return pokemonImageHash[name];
    }

    refreshDescriptions() {
        this.gameDescriptions = this.filterDescriptionByLanguage(this.pokemonSpecies);
    }

    getImageUri() {
        return getPokemonImageUri(this.id);
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.pokemonDetailSubscription?.unsubscribe();
        this.pokemonSpeciesSubscription?.unsubscribe();
    }

    getColorByType(type: string) {
        return pokemonTypeColorMap[type];
    }

    getNameByLanguage(names: PokemonSpecies[]) {
        const found = names.find((item: any) => item.language.name === this.language);
        return found?.name || 'unknown';
    }

    getStats() {

        return JSON.parse(JSON.stringify(this.statsData));

    }
}