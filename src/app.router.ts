import { Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';

export const rootRouterConfig: Routes = [
	{ path: '', redirectTo: 'form', pathMatch: 'full' },
	{ path: 'form', component: FormComponent },
	{ path: 'grid', component: GridComponent }
];