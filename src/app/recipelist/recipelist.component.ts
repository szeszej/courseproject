import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeListService } from "./recipe-list.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;
  fetchingSubscription: Subscription;
  fetching = this.recipeListService.getRecipes().length === 0 ? true : false;

  constructor(private recipeListService: RecipeListService, private router: Router, private route: ActivatedRoute, private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipes();
    this.recipeSubscription = this.recipeListService.recipesChange.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.fetchingSubscription = this.dataStorage.fetching.subscribe(isFetching => {this.fetching = isFetching})
  }

  setSelectedRecipe(id: number) {
    this.router.navigate([id], {relativeTo: this.route})

  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe()
    this.fetchingSubscription.unsubscribe()
  }

}
