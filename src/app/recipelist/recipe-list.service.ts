import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()

export class RecipeListService {

  private recipes: Recipe[] = [
    new Recipe("Pomidorowa", "Zupa pomidorowa według przepisu babci", "https://i.imgur.com/kgAY8Gx.png", [new Ingredient("Pomidor", 4), new Ingredient("Makaron", 1)]),
    new Recipe("Jarzynowa", "Zupa jarzynowa według przepisu mamy", "https://i.imgur.com/0FSvEF2.png", [new Ingredient("Marchewka", 2), new Ingredient("Seler", 1)])
  ];

  recipesChange = new Subject<Recipe[]>();

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

  modifyRecipe(index, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChange.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.recipes.slice());
  }

}
