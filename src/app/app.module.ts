import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemons/pokemon-list.component';
import { PokemonRoutingModule } from './pokemons/pokemon-routing.module';
import { PokemonDetailComponent } from './pokemons/profile/pokemon-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemons/pokemon.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [    
    BrowserAnimationsModule,
    PokemonModule,    
    NgxChartsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
