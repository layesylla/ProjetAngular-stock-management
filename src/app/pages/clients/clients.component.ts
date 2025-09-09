import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients = [
    { name: 'Amy Diop', email: 'diopamy@gmail.com' },
    { name: 'Daouda Barry', email: 'barryDaouda@gmail.com' }
  ];
  newClient = { name: '', email: '' };

  addClient() {
    if(this.newClient.name && this.newClient.email) {
      this.clients.push({ ...this.newClient });
      this.newClient = { name: '', email: '' }; 
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  }
}
