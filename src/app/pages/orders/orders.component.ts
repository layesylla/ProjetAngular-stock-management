import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Order {
  id: number;
  product: string;
  quantity: number;
  date: string;
}

@Component({
  selector: 'app-orders',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './orders.component.html',
  styleUrl:'./orders.component.scss'
})
export class OrdersComponent {
  orders: Order[] = [
    { id: 1, product: 'Ordinateur', quantity: 2, date: '2025-09-09' },
    { id: 2, product: 'Clavier', quantity: 5, date: '2025-09-08' }
  ];

  newOrder: Order = { id: 0, product: '', quantity: 0, date: '' };
  editOrderId: number | null = null;

  addOrder() {
    if (this.newOrder.product && this.newOrder.date) {
      this.newOrder.id = this.orders.length + 1;
      this.orders.push({ ...this.newOrder });
      this.newOrder = { id: 0, product: '', quantity: 0, date: '' };
    }
  }

  editOrder(order: Order) {
    this.editOrderId = order.id;
    this.newOrder = { ...order };
  }

  updateOrder() {
    if (this.editOrderId !== null) {
      const index = this.orders.findIndex(o => o.id === this.editOrderId);
      if (index !== -1) this.orders[index] = { ...this.newOrder };
      this.cancelEdit();
    }
  }

  deleteOrder(id: number) {
    this.orders = this.orders.filter(o => o.id !== id);
  }

  cancelEdit() {
    this.editOrderId = null;
    this.newOrder = { id: 0, product: '', quantity: 0, date: '' };
  }
}
