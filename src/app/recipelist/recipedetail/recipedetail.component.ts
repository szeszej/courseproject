import { Component, AfterViewInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeListService } from "../recipe-list.service";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.css"]
})

export class RecipedetailComponent {
  recipe: Recipe;

  constructor(private recipeListService: RecipeListService) {
    this.recipeListService.recipeSelected.subscribe(
      (recipe: Recipe) => this.recipe = recipe
    )
  }

  onAddIngredientsClick() {
    this.recipeListService.onAddIngredientsToList(this.recipe);
  }
}
