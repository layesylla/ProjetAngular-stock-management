import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  fournisseurs = [
    { name: 'Samba SIDIBE', contact: 'sambasidibe@gmail.com' },
    { name: 'Omar FALL', contact: 'omarfall@gmail.com' }
  ];

  newFournisseur = { name: '', contact: '' };

  addFournisseur() {
    if(this.newFournisseur.name && this.newFournisseur.contact) {
      this.fournisseurs.push({ ...this.newFournisseur });
      this.newFournisseur = { name: '', contact: '' };
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  }
}
