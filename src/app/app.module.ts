import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { RecipeListModule } from "./recipelist/recipe-list.module";
import { ShoppingListModule } from "./shoppinglist/shopping-list.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';



import { AlertComponent } from "./shared/alert/alert.component";

import { DropdownDirective } from "./shared/dropdown.directive";
import { PlaceholderDirective } from "./shared/placeholder/placeholder.directive";

import { ShoppingListService } from "./shoppinglist/shopping-list.service";
import { RecipeListService } from "./recipelist/recipe-list.service";

import { AuthInterceptorService } from "./auth/auth-interceptor.service";

import { AppRoutingModule } from "./app-routing.module";

import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PlaceholderDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeListModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeListService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
