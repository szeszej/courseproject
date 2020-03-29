import { Component } from '@angular/core';
import { Recipe } from "./recipelist/recipe.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseproject';
  tab = "recipes";
  currentRecipe: Recipe;

  constructor() {

  }
  showRecipe(recipe) {
    this.currentRecipe = recipe;
  }
}
