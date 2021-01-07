import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('A Test Recipe',
		'This is simply a test',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dak-gangjeong.jpg/800px-Dak-gangjeong.jpg',
		[
			new Ingredient('Meat', 1),
			new Ingredient('French Fries', 20)
		]),
		new Recipe('Another Test Recipe', 'This is simply a test', 'https://img.theculturetrip.com/450x/smart/images/56-3621217-1422904501802eea9af7ee4032a1c59daecee00008.jpg',
		[
			new Ingredient('Buns', 2),
			new Ingredient('Meat', 1)
		])
	];

	constructor(private slService: ShoppingListService) {}
	
	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
}