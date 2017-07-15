import { Component } from '@angular/core';

import * as components from "./ComponentPool";

@Component({
	selector: 'my-app',
	templateUrl: 'app.html'
})

export class AppComponent {}

components.bootstrap.push(AppComponent);
components.declarations.push(AppComponent);
