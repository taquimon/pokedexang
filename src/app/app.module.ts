import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemons/pokemon-list.component';
import { PokemonRoutingModule } from './pokemons/pokemon-routing.module';
import { PokemonDetailComponent } from './pokemons/profile/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
