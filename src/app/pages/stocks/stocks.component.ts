import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Stock {
  id: number;
  product: string;
  quantity: number;
}

@Component({
  selector: 'app-stocks',
  standalone:true,
  imports:[FormsModule,RouterModule,CommonModule],
  templateUrl: './stocks.component.html',
  styleUrl:'./stocks.component.scss'
})
export class StocksComponent {
  stocks: Stock[] = [
    { id: 1, product: 'Ordinateur', quantity: 10 },
    { id: 2, product: 'Clavier', quantity: 20 }
  ];

  newStock: Stock = { id: 0, product: '', quantity: 0 };
  editStockId: number | null = null;

  addStock() {
    if (this.newStock.product) {
      this.newStock.id = this.stocks.length + 1;
      this.stocks.push({ ...this.newStock });
      this.newStock = { id: 0, product: '', quantity: 0 };
    }
  }

  editStock(stock: Stock) {
    this.editStockId = stock.id;
    this.newStock = { ...stock };
  }

  updateStock() {
    if (this.editStockId !== null) {
      const index = this.stocks.findIndex(s => s.id === this.editStockId);
      if (index !== -1) this.stocks[index] = { ...this.newStock };
      this.cancelEdit();
    }
  }

  deleteStock(id: number) {
    this.stocks = this.stocks.filter(s => s.id !== id);
  }

  cancelEdit() {
    this.editStockId = null;
    this.newStock = { id: 0, product: '', quantity: 0 };
  }
}
