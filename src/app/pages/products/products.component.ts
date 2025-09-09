import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products',
  standalone:true,
  imports :[FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl:'./products.component.scss'
})
export class ProductsComponent {
  searchTerm: string = '';

  products: Product[] = [
    { id: 1, name: 'Ordinateur', price: 800, quantity: 10 },
    { id: 2, name: 'Clavier', price: 50, quantity: 20 },
    { id:3 ,name: 'Laptop', price: 1200, quantity:15},
    { id:4 ,name: 'Smartphone', price: 800 ,quantity:10},
    { id:5 ,name: 'Souris', price: 30 ,quantity:20}

  ];
   get filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  newProduct: Product = { id: 0, name: '', price: 0, quantity: 0 };
  editProductId: number | null = null;

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.newProduct.id = this.products.length + 1;
      this.products.push({ ...this.newProduct });
      this.newProduct = { id: 0, name: '', price: 0, quantity: 0 };
    }
  }

  editProduct(product: Product) {
    this.editProductId = product.id;
    this.newProduct = { ...product };
  }

  updateProduct() {
    if (this.editProductId !== null) {
      const index = this.products.findIndex(p => p.id === this.editProductId);
      if (index !== -1) this.products[index] = { ...this.newProduct };
      this.cancelEdit();
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  cancelEdit() {
    this.editProductId = null;
    this.newProduct = { id: 0, name: '', price: 0, quantity: 0 };
  }
}
