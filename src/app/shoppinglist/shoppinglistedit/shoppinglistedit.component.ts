import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ShoppingListService } from "../shopping-list.service";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick() {
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
