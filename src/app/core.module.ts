import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ShoppingListService } from "./shoppinglist/shopping-list.service";
import { RecipeListService } from "./recipelist/recipe-list.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";

@NgModule({
  providers: [ShoppingListService, RecipeListService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]
})

export class CoreModule {

}
