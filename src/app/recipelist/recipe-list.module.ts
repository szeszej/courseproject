import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { RecipeListRoutingModule } from "./recipe-list-routing.module";

import { RecipelistComponent } from './recipelist.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    SelectRecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipeListRoutingModule
  ]
})

export class RecipeListModule {

}
