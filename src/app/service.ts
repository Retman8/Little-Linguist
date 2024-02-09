import { Category } from "./shared/model/category";
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  private categories: Map<number, Category> = new Map<number, Category>();
  constructor() { }

  addCategory(id: number, category: Category): void {
    this.categories.set(id, category);
  }

  updateCategory(id: number, category: Category): void {
    category.lastModifiedDate=new Date();
    if (this.categories.has(id)) {
      this.categories.set(id, category);
    } else {
      console.error(`Category with ID ${id} does not exist.`);
    }
  }

  deleteCategory(id: number): void {
    if (this.categories.has(id)) {
      this.categories.delete(id);
    } else {
      console.error(`Category with ID ${id} does not exist.`);
    }
  }

  getCategories():Map<number, Category> | undefined {
    return this.categories;
  }

  getCategory(id: number): Category | undefined {
    return this.categories.get(id);
  }

}
