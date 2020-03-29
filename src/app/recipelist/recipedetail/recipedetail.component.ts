import { Component, Input, AfterViewInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipedetail",
  templateUrl: "./recipedetail.component.html",
  styleUrls: ["./recipedetail.component.css"]
})

export class RecipedetailComponent implements AfterViewInit {
  @Input() recipe: Recipe;

  ngAfterViewInit() {
    console.log(this.recipe);

  }
}
