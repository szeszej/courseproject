import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  private igChangeSubscription: Subscription
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.igChangeSubscription = this.shoppingListService.ingredientsChange.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
  }

  ngOnDestroy(): void {
    this.igChangeSubscription.unsubscribe()
  }

}
