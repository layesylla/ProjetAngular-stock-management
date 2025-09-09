import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-categories',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  categories: Category[] = [
    { id: 1, name: 'Informatique' },
    { id: 2, name: 'Accessoires' }
  ];

  newCategory: Category = { id: 0, name: '' };
  editCategoryId: number | null = null;

  addCategory() {
    if (this.newCategory.name) {
      this.newCategory.id = this.categories.length + 1;
      this.categories.push({ ...this.newCategory });
      this.newCategory = { id: 0, name: '' };
    }
  }

  editCategory(cat: Category) {
    this.editCategoryId = cat.id;
    this.newCategory = { ...cat };
  }

  updateCategory() {
    if (this.editCategoryId !== null) {
      const index = this.categories.findIndex(c => c.id === this.editCategoryId);
      if (index !== -1) this.categories[index] = { ...this.newCategory };
      this.cancelEdit();
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(c => c.id !== id);
  }

  cancelEdit() {
    this.editCategoryId = null;
    this.newCategory = { id: 0, name: '' };
  }
}
