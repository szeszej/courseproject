import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RecipeListService } from "../recipe-list.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeListService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] ? true : false
    });
    this.initForm();
  }

  private initForm() {
    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      let ingredients = new FormArray([]);
      if (recipe["ingredients"]) {
        recipe.ingredients.forEach(ingredient => {
          ingredients.push(new FormGroup({
            "name": new FormControl(ingredient.name, Validators.required),
            "amount": new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        })
      }

      this.recipeEditForm = new FormGroup({
        "name": new FormControl(recipe.name, Validators.required),
        "image": new FormControl(recipe.imagePath, Validators.required),
        "description": new FormControl(recipe.description, Validators.required),
        "ingredients": ingredients
      })
    } else {
      this.recipeEditForm = new FormGroup({
        "name": new FormControl(null, Validators.required),
        "image": new FormControl(null, Validators.required),
        "description": new FormControl(null, Validators.required),
        "ingredients": new FormArray([])
      })
    }
  }

  get controls() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get("ingredients")).push(new FormGroup({
      "name": new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  ingredientsCheck() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).length > 0 ? true : false;
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get("ingredients")).removeAt(index)
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.modifyRecipe(this.id, new Recipe(this.recipeEditForm.value.name, this.recipeEditForm.value.description, this.recipeEditForm.value.image, this.recipeEditForm.value.ingredients))
    } else {
      this.recipeService.addRecipe(new Recipe(this.recipeEditForm.value.name, this.recipeEditForm.value.description, this.recipeEditForm.value.image, this.recipeEditForm.value.ingredients))
    }
    this.onCancel()
  }

  onCancel() {
    this.router.navigate([".."], {relativeTo: this.route});
  }

}
