import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PokemonListComponent } from './pokemon-list.component';
import { NotFoundComponent} from '../commons/not-found.component';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonGenerationComponent } from './pokemon-generation.component';
import { MenuComponent } from '../commons/menu/menu.component';
import { HeaderComponent } from '../commons/header/header.component';
import { StyleManagerService } from '../commons/header/style-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const materialModule = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
  
]
@NgModule({
  declarations: [
    PokemonListComponent,
    NotFoundComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonGenerationComponent,
    MenuComponent,
    HeaderComponent,    
    
    
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    ...materialModule    
  ],
  exports: [      
      PokemonRoutingModule,
      MenuComponent,
      HeaderComponent,
      MatFormFieldModule    
  ],
  providers: [StyleManagerService],
  bootstrap: []
})
export class PokemonModule { }
