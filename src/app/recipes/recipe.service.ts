import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	// private recipes: Recipe[] = [
	// 	new Recipe('A Test Recipe',
	// 	'This is simply a test',
	// 	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dak-gangjeong.jpg/800px-Dak-gangjeong.jpg',
	// 	[
	// 		new Ingredient('Meat', 1),
	// 		new Ingredient('French Fries', 20)
	// 	]),
	// 	new Recipe('Another Test Recipe', 'This is simply a test', 'https://img.theculturetrip.com/450x/smart/images/56-3621217-1422904501802eea9af7ee4032a1c59daecee00008.jpg',
	// 	[
	// 		new Ingredient('Buns', 2),
	// 		new Ingredient('Meat', 1)
	// 	])
	// ];
	private recipes: Recipe[] = [];


	constructor(private slService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}