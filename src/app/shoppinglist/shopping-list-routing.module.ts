import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglistedit/shoppinglistedit.component';

const routes: Routes = [
  {
    path: "shop",
    component: ShoppinglistComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingListRoutingModule {

}
