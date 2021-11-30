import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonListComponent } from './pokemon-list.component';
import { NotFoundComponent} from './commons/not-found.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    NotFoundComponent,
    PokemonDetailComponent
  ],
  imports: [    
    PokemonModule
  ],
  exports: [
      PokemonListComponent,
      PokemonDetailComponent
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
