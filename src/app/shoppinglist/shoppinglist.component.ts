import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  providers: [LoggingService]
})
export class ShoppinglistComponent implements OnInit {
  private igChangeSubscription: Subscription
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) {
    this.igChangeSubscription = this.shoppingListService.ingredientsChange.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.loggingService.printLog("Hello from ShoppinglistComponent ngOnInit")
  }

  ngOnDestroy(): void {
    this.igChangeSubscription.unsubscribe()
  }

  onEditIngredient(id) {
    this.shoppingListService.selectIngredient(id);
  }
}
