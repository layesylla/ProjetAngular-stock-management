import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Brand {
  id: number;
  name: string;
}

@Component({
  selector: 'app-brands',
  standalone:true,
  imports: [FormsModule,RouterModule, CommonModule],
  templateUrl: './brands.component.html'
})
export class BrandsComponent {
  brands: Brand[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' }
  ];

  newBrand: Brand = { id: 0, name: '' };
  editBrandId: number | null = null;

  addBrand() {
    if (this.newBrand.name) {
      this.newBrand.id = this.brands.length + 1;
      this.brands.push({ ...this.newBrand });
      this.newBrand = { id: 0, name: '' };
    }
  }

  editBrand(brand: Brand) {
    this.editBrandId = brand.id;
    this.newBrand = { ...brand };
  }

  updateBrand() {
    if (this.editBrandId !== null) {
      const index = this.brands.findIndex(b => b.id === this.editBrandId);
      if (index !== -1) this.brands[index] = { ...this.newBrand };
      this.cancelEdit();
    }
  }

  deleteBrand(id: number) {
    this.brands = this.brands.filter(b => b.id !== id);
  }

  cancelEdit() {
    this.editBrandId = null;
    this.newBrand = { id: 0, name: '' };
  }
}
