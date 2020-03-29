import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeClick = new EventEmitter<string>();
  @Output() shoppingClick = new EventEmitter<string>();

  constructor() { }

  onRecipesClick() {
    this.recipeClick.emit("recipes");
  }

  onShoppingClick() {
    this.recipeClick.emit("shopping");
  }

  ngOnInit(): void {
  }

}
