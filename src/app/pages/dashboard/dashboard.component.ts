import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  totalProducts = 25;     // tu peux remplacer par tes données dynamiques
  totalCategories = 8;
  totalBrands = 10;
  totalStocks = 150;
  totalOrders = 32;
}
