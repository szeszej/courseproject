import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

  ingredientsChange = new Subject<Ingredient[]>();
  selectedIngredient = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient("Pomidor", 5),
    new Ingredient("Makaron", 1)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChange.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice())
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id]
  }

  selectIngredient(id: number) {
    this.selectedIngredient.next(id)
  }

  editIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChange.next(this.ingredients.slice())
  }

}
