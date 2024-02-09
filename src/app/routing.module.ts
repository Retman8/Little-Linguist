import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryTableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: CategoryTableComponent },
  { path: 'form/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }