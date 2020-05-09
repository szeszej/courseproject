import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RecipeListService } from "../recipe-list.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeListService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] ? true : false
    });
    this.initForm();
  }

  private initForm() {
    if (this.editMode) {
        let recipe = this.recipeService.getRecipe(this.id)
        this.recipeEditForm = new FormGroup({
          "name": new FormControl(recipe.name, Validators.required),
          "image": new FormControl(recipe.imagePath),
          "description": new FormControl(recipe.description, Validators.required)
        })
    } else {
      this.recipeEditForm = new FormGroup({
        "name": new FormControl(null, Validators.required),
        "image": new FormControl(null),
        "description": new FormControl(null, Validators.required)
      })
    }
  }

  onSubmit() {
    console.log(this.recipeEditForm);
  }

}
