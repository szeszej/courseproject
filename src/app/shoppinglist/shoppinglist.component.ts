import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Pomidor", 5),
    new Ingredient("Makaron", 1)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
