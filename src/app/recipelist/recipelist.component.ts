import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pomidorowa", "Zupa pomidorowa według przepisu babci", "https://i.imgur.com/kgAY8Gx.png"),
    new Recipe("Jarzynowa", "Zupa jarzynowa według przepisu mamy", "https://i.imgur.com/0FSvEF2.png")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
