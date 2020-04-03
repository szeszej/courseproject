import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeListService {

  private recipes: Recipe[] = [
    new Recipe("Pomidorowa", "Zupa pomidorowa według przepisu babci", "https://i.imgur.com/kgAY8Gx.png"),
    new Recipe("Jarzynowa", "Zupa jarzynowa według przepisu mamy", "https://i.imgur.com/0FSvEF2.png")
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
