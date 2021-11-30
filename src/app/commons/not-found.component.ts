import { Component } from "@angular/core";

@Component({
    selector: 'not-found',
    template: `<div class="not_found" *ngIf="!pokemons.length">
               <h2>No pokemons to display</h2>
               <img src="url">
               </div>`,
    styleUrls:['./not-found.component.less']
})

export class NotFoundComponent {
    url: string = 'assets/not-found.png'
}