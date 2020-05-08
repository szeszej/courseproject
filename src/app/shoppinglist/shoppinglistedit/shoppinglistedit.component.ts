import { Component, OnInit, ViewChild, OnDestroy, } from '@angular/core';
import { ShoppingListService } from "../shopping-list.service";
import { Ingredient } from "../../shared/ingredient.model";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  selectedIngredientSubscription: Subscription;
  editMode = false;
  editedIngredient: number;
  @ViewChild("f") form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.selectedIngredientSubscription = this.shoppingListService.selectedIngredient.subscribe((id: number) => {
      let ingredient = this.shoppingListService.getIngredient(id)
      this.form.setValue({
        ingredient: ingredient.name,
        amount: ingredient.amount
      });
      this.editMode = true;
      this.editedIngredient = id;
    })
  }

  onAddClick(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.editedIngredient, new Ingredient(form.form.controls.ingredient.value, form.form.controls.amount.value));
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(new Ingredient(form.form.controls.ingredient.value, form.form.controls.amount.value));
    }
    form.reset()
  }

  onReset() {
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.selectedIngredientSubscription.unsubscribe()
  }

}
