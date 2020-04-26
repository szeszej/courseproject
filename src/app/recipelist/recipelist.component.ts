import { Component, OnInit} from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeListService } from "./recipe-list.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeListService: RecipeListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipes();
  }

  setSelectedRecipe(id: number) {
    this.router.navigate([id], {relativeTo: this.route})

  }

}
