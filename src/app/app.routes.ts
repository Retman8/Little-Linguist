import { Routes } from '@angular/router';
import { CategoryTableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [  { path: '', component: CategoryTableComponent },
{ path: 'form', component: FormComponent },
{ path: 'form/:id', component: FormComponent }
];