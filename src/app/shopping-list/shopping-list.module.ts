import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
		declarations: [
			ShoppingListComponent,
			ShoppingEditComponent,			
		],
		imports: [RouterModule.forChild([
			{ path: '', component: ShoppingListComponent },]), CommonModule, FormsModule],
		providers: [],
		bootstrap: []
	}
)
export class ShoppingListModule {

}