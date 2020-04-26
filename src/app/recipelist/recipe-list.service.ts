import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shopping-list.service";

@Injectable()

export class RecipeListService {

  private recipes: Recipe[] = [
    new Recipe("Pomidorowa", "Zupa pomidorowa według przepisu babci", "https://i.imgur.com/kgAY8Gx.png", [new Ingredient("Pomidor", 4), new Ingredient("Makaron", 1)]),
    new Recipe("Jarzynowa", "Zupa jarzynowa według przepisu mamy", "https://i.imgur.com/0FSvEF2.png", [new Ingredient("Marchewka", 2), new Ingredient("Seler", 1)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  onAddIngredientsToList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients)
  }

}
