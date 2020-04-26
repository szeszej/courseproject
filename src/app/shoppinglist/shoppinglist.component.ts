import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.ingredientsChange.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
  }

}