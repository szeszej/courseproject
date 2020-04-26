import { Component } from '@angular/core';
import { Recipe } from "./recipelist/recipe.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) {

  }

}
