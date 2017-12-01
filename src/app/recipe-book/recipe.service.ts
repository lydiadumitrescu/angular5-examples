import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'simple s test desc',
      'http://via.placeholder.com/200x200',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]),
    new Recipe(
      'a test recipe2',
      'simple s test desc2',
      'http://via.placeholder.com/200x200',
      [
        new Ingredient('meat', 2),
        new Ingredient('french fries', 10)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
