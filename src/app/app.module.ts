import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeitemComponent } from './recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipelist/recipedetail/recipedetail.component';
import { DropdownDirective } from "./shared/dropdown.directive";

import { ShoppingListService } from "./shoppinglist/shopping-list.service";
import { RecipeListService } from "./recipelist/recipe-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    ShoppinglisteditComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService, RecipeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
