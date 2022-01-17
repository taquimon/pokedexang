import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'pokemon-add',
    templateUrl: './pokemon-add.component.html',
    styleUrls: []
})

export class PokemonAddComponent implements OnInit {
    // name = new FormControl();
    public profileForm = new FormGroup({
        pokemonName: new FormControl(''),
        pokemonDescription: new FormControl('')
    })    

    // profileForm = this.fb.group({
    //     pokemonName: ['', [Validators.required, Validators.minLength(4)]],
    //     pokemonDescription: ['', Validators.required],
    //     address: this.fb.group({
    //         // street: ['', forbidenNameValidator(/\w+/g)],
    //         city: [],
    //         state: [],
    //         zip: []
    //     }),
    //     types: this.fb.array([
    //         this.fb.control('')
    //     ])
    // });
    types: any;

    constructor(private fb: FormBuilder){
        

    }

    ngOnInit(): void  {
        
    }
    getTypes() {
        return this.profileForm.get('types') as FormArray;
    }

    addType() {
        this.types.push(this.fb.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.value)
    }

}