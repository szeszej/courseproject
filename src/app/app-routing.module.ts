import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipelistComponent } from "./recipelist/recipelist.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipedetailComponent } from "./recipelist/recipedetail/recipedetail.component";
import { SelectRecipeComponent } from "./recipelist/select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipelist/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {
    path: "recipes",
    component: RecipelistComponent,
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
          component: RecipedetailComponent
        },
        {
          path: ":id/edit",
          component: RecipeEditComponent
        }
      ]
  },

  {
    path: "shop",
    component: ShoppinglistComponent
  },
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
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
