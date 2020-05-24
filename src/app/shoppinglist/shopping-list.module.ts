import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglistedit/shoppinglistedit.component';
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
  declarations: [
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ShoppingListRoutingModule
  ]
})

export class ShoppingListModule {

}
