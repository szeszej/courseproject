import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";

import { RecipelistComponent } from './recipelist.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { RecipeResolverService } from "./recipe-resolver.service";

const routes: Routes = [{
  path: "",
  component: RecipelistComponent,
  canActivate: [AuthGuard],
  children:
    [
      {
        path: "",
        component: SelectRecipeComponent,
        pathMatch: "full"
      },
      {
        path: "new",
        component: RecipeEditComponent
      },
      {
        path: ":id",
        component: RecipedetailComponent,
        resolve: [RecipeResolverService]
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      }
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipeListRoutingModule {

}
