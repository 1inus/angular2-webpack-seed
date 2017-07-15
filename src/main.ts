import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './app.component';

import * as components from "./ComponentPool";

@NgModule({
	imports: [BrowserModule],
	declarations:components.declarations,
	bootstrap: components.bootstrap
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);