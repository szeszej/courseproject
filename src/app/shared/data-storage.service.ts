import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeListService } from "../recipelist/recipe-list.service";
import { Recipe } from "../recipelist/recipe.model";
import { Subject } from "rxjs";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})

export class DataStorageService {
  fetching = new Subject<boolean>();

  constructor(private http: HttpClient, private recipesService: RecipeListService, private authService: AuthService) {

  }

  storeRecipes() {
    let recipes = this.recipesService.getRecipes();
    this.http.put("https://recipe-book-app-bce43.firebaseio.com/recipes.json", recipes).subscribe(response => console.log(response))
  }

  fetchRecipes() {
    this.fetching.next(true);
    return this.http.get<Recipe[]>("https://recipe-book-app-bce43.firebaseio.com/recipes.json").pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }),tap(
        recipes => {
          this.fetching.next(false);
          this.recipesService.overwriteRecipes(recipes)
        }
      )
    )
  }
}
