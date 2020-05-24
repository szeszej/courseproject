import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipelistComponent } from "./recipelist/recipelist.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipedetailComponent } from "./recipelist/recipedetail/recipedetail.component";
import { SelectRecipeComponent } from "./recipelist/select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipelist/recipe-edit/recipe-edit.component";
import { AuthComponent } from './auth/auth.component';

import { AuthGuard } from "./auth/auth.guard";
import { RecipeResolverService } from "./recipelist/recipe-resolver.service";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
