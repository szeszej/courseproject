import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeListService } from "./recipe-list.service";


@Injectable({
  providedIn: "root"
})

export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorage: DataStorageService, private recipesService: RecipeListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.recipesService.getRecipes().length === 0 ? this.dataStorage.fetchRecipes() : this.recipesService.getRecipes()
  }
}
