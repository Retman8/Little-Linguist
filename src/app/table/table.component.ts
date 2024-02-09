import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../service';
import { Category } from '../shared/model/category';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,MatTableModule,CommonModule,RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class CategoryTableComponent {
  constructor(private categoryService: CategoryService,private router: Router,public dialog: MatDialog){} 
  categories = this.categoryService.getCategories();
  arr=this.categories ? [...this.categories.values()] : [];
  categoriesDisplay = this.arr.map((category:Category) => {
      return {
        name: category.categoryName,
        words: category.wordPairs,
        lastModified: category.lastModifiedDate,
        id:category.numericIdentifier
      };
    });

  dataSource =this.categoriesDisplay;

  openDialog(category:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {content: `are you sure you want to delete category "${category.name}" ?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result:', result);
      if (result && result.action === 'delete') {
        this.categoryService.deleteCategory(category.id);
        this.categories = this.categoryService.getCategories();
        this.updateCategoriesDisplay();
      }
    });
  }
  editCategory(category: any): void {
    this.router.navigate([`form/${category.id}`]);
  }

  private updateCategoriesDisplay(): void {
    this.arr = this.categories ? [...this.categories.values()] : [];
    this.categoriesDisplay = this.arr.map((category: Category) => {
      return {
        name: category.categoryName,
        words: category.wordPairs,
        lastModified: category.lastModifiedDate,
        id: category.numericIdentifier
      };
    });
    this.dataSource = this.categoriesDisplay;
  }
}