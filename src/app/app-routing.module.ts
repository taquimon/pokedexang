import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { 
        path: '', 
        redirectTo: './pokedex',
        pathMatch: 'full' 
    },
    {   //for list of pokemons
        path: 'pokedex', 
       loadChildren: () => import('./pokemons/pokemon.module').then(m => m.PokemonModule)

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }