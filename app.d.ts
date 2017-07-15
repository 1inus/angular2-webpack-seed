declare module 'src/ComponentPool' {
	export let imports: any[];
	export let declarations: any[];
	export let bootstrap: any[];
	export let entryComponents: any[];
	export let providers: any[];

}
declare module 'src/app.component' {
	export class AppComponent {
	}

}
declare module 'src/app.router' {
	import { Routes } from '@angular/router';
	export const rootRouterConfig: Routes;

}
declare module 'src/main' {
	import 'src/app.component';
	export class AppModule {
	}

}
declare module 'src/vendor' {
	import "zone.js";
	import "reflect-metadata";
	import "@angular/core";
	import "@angular/platform-browser";
	import "@angular/platform-browser-dynamic";
	import "@angular/common";
	import "@angular/compiler";
	import "@angular/forms";
	import "@angular/http";
	import "@angular/router";

}
declare module 'src/components/form/form.component' {
	export class FormComponent {
	}

}
declare module 'src/components/grid/grid.component' {
	export class GridComponent {
	}

}
