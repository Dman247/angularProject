import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot(fromApp.appReducer),
		StoreDevtoolsModule.instrument({ logOnly: environment.production }),
		EffectsModule.forRoot([AuthEffects]),
		SharedModule,
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
