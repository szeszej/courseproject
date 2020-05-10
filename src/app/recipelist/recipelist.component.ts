import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeListService } from "./recipe-list.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription

  constructor(private recipeListService: RecipeListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipes();
    this.recipeSubscription = this.recipeListService.recipesChange.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  setSelectedRecipe(id: number) {
    this.router.navigate([id], {relativeTo: this.route})

  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe()
  }

}
