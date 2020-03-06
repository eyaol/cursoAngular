import {Component} from "@angular/core"

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = "Pokemon List";
    imageWidth: number = 50;
    imageFlag = false;
    pokemons: any[] = [
        {
          "pokemonId": 1,
          "pokemonName": "Charmander",
          "imageUrl": "assets/images/charmander.png"
        },
        {
          "pokemonId": 2,
          "pokemonName": "Squirtle",
          "imageUrl": "assets/images/squirtle.png"
        }
      ];
     
      toggleImage(): void {
        this.imageFlag = !this.imageFlag;
        console.log(this.imageFlag);
      } 
}