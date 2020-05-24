import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { RecipeListModule } from "./recipelist/recipe-list.module";
import { ShoppingListModule } from "./shoppinglist/shopping-list.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from "./shoppinglist/shopping-list.service";
import { RecipeListService } from "./recipelist/recipe-list.service";

import { AuthInterceptorService } from "./auth/auth-interceptor.service";

import { AppRoutingModule } from "./app-routing.module";

import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeListModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeListService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
