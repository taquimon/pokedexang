import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonDetailComponent } from "./profile/pokemon-detail.component";

const routes: Routes = [
    { 
        path: '', 
        redirectTo: './pokedex',
        pathMatch: 'full' 
    },
    {   //for list of pokemons
        path: 'pokedex', 
        component: PokemonListComponent

    },
    {   //for pokemon detail
        path: 'pokedex/:id', 
        component: PokemonDetailComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule { }