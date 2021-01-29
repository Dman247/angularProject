import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromShoppingList from './store/shopping-list.reducer';
import { Ingredient } from '../shared/ingredient.model';
import * as shoppingListActions from './store/shopping-list.actions';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Observable<{ ingredients: Ingredient[] }>;

	constructor(private store: Store<fromShoppingList.AppState>) { }

	ngOnInit(): void {
		this.ingredients = this.store.select('shoppingList');
	}

	onEditItem(index: number) {
		this.store.dispatch(new shoppingListActions.StartEdit(index));
	}

	ngOnDestroy(): void {}

}
