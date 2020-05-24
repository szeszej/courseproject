import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

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
    ShoppingListRoutingModule,
    SharedModule
  ]
})

export class ShoppingListModule {

}
