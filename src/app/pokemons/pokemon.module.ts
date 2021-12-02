import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonListComponent } from './pokemon-list.component';
import { NotFoundComponent} from '../commons/not-found.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    NotFoundComponent,
    PokemonDetailComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    PokemonModule
  ],
  exports: [
      PokemonListComponent,
      PokemonDetailComponent,
      PokemonRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
