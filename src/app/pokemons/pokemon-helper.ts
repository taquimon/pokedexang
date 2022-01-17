import { Validators } from "@angular/forms";

export function getPokemonIdfromUrl(url: string) {
    // will divide the string "https://pokeapi.co/api/v2/pokemon/19/" into
    // 0: "https:"
    // 1: ""
    // 2: "pokeapi.co"
    // 3: "api"
    // 4: "v2"
    // 5: "pokemon"
    // 6: "1"
    // 7: ""
    const parseUrl = url.split('/'),
        id = parseUrl[parseUrl.length -2]        
    //and wi will take the position 6 it is the id            
    return id;
}
export function getPokemonImageUri (id: string) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
}

// export function forbidenNameValidator(regex: RegExp): Validators{
//     const forbidenName = 
//     return forbiden ? { fir}
// }