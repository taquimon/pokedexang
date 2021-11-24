import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonListComponent } from './pokemon-list.component';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [    
    PokemonModule
  ],
  exports: [
      PokemonListComponent
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
