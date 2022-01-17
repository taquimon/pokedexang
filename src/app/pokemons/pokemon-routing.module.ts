import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonAddComponent } from "./add/pokemon-add.component";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonResolverService } from "./pokemon-resolver.service";
import { PokemonsResolverService } from "./pokemons-resolver.service";
import { PokemonDetailComponent } from "./profile/pokemon-detail.component";

const routes: Routes = [
    {   //for pokemon detail
        path: 'pokedex/:id', 
        component: PokemonDetailComponent,
        resolve: {
            pokemon: PokemonResolverService
        }
    },    
    {   //for list of pokemons
        path: 'pokedex', 
        component: PokemonListComponent,
        resolve: {
            pokemons: PokemonsResolverService
        }

    },
    { 
        path: 'add-pokemon', 
        component: PokemonAddComponent
    }        
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule { }