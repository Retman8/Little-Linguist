import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,MatTableModule,CommonModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class CategoryTableComponent {
  categories = [
    { name: 'Countries', words: ['Italy', 'Frane', 'Poland'], lastModified: new Date() },
    { name: 'Food', words: ['Egg', 'Bread', 'Rice'], lastModified: new Date() },
    { name: 'Animals', words: ['Dog', 'Cat', 'Horse'], lastModified: new Date() }
  ];
  dataSource = this.categories;

  editCategory(category: any): void {
    // Corrected syntax with template literals
    console.log(`Editing category: ${category.name}`);
  }

  deleteCategory(category: any): void {
    // Corrected syntax with template literals
    console.log(`Deleting category: ${category.name}`);
  }
}