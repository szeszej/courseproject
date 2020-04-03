import { Component, OnInit} from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeListService } from "./recipe-list.service";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeListService: RecipeListService) { }

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipes();
  }

  setSelectedRecipe(recipe: Recipe) {
    this.recipeListService.recipeSelected.emit(recipe);

  }

}
