import { Component, AfterViewInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeListService } from "../recipe-list.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.css"]
})

export class RecipedetailComponent {
  recipe: Recipe;
  id: number;

  constructor(private recipeListService: RecipeListService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeListService.getRecipe(this.id);
})

  }

  onAddIngredientsClick() {
    this.recipeListService.onAddIngredientsToList(this.recipe);
  }

  onDeleteRecipe() {
    this.recipeListService.removeRecipe(this.id);
    this.router.navigate([".."], {relativeTo: this.route});
  }
}
