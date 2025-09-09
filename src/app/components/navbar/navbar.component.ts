
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Produits', route: '/products' },
    { name: 'Catégories', route: '/categories' },
    { name: 'Marques', route: '/brands' },
    { name: 'Stocks', route: '/stocks' },
    { name: 'Commandes', route: '/orders' }
    
  ];
 
}


