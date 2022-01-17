import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { PokemonCardComponent } from "./pokemon-card.component";

let MockPokemonRouter: Partial<Router>;
const imageUrl = '';
describe('Pokemon card test', () => {
    let component: PokemonCardComponent,
    fixture: ComponentFixture<PokemonCardComponent>,
    router: Router,
    p: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonCardComponent],
            providers: [
                { 
                    provide: Router,
                    useValue: MockPokemonRouter
                }
            ]
        })

        fixture = TestBed.createComponent(PokemonCardComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router)
        component.pokemon = { name: 'bulbasaur', url: ''}
        p = fixture.nativeElement.querySelector('p');
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });    

    // it('should get image', () => {
    //     expect(component.getImageUri()).toBe(imageUrl);
    // });

    it('should find the <p> before load data', () => {
        expect(p.textContent).toEqual('');
    });
    it('should find the <p> after load data', () => {
        fixture.detectChanges();
        expect(p.textContent).toEqual('');
    });
    it('should get image src', () => {
        fixture.detectChanges();
        const element: DebugElement = fixture.debugElement,
        imagecss = element.query(By.css('img'))
        expect(p.textContent).toEqual('');
    });

});