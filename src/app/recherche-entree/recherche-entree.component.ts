import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimalServiceService } from '../service/animalService/animal-service.service';
import { Animal } from '../model/animal.model';

@Component({
  selector: 'app-recherche-entree',
  templateUrl: './recherche-entree.component.html',
  styleUrls: ['./recherche-entree.component.css']
})
export class RechercheEntreeComponent implements OnInit {
  data: any;
  afficherResultat = false;
  nom = "";

  @Output() rechercheEffectuee = new EventEmitter<Animal>();
  @Output() afficherResultatRecherche = new EventEmitter<boolean>();

  constructor(private animalService: AnimalServiceService) { }

  ngOnInit(): void {
  }

  rechercherAnimal() {
    console.log("Recherche de l'animal :", this.nom);
    this.animalService.getAnimalInfoByNom(this.nom).subscribe({
      next: (response) => {
        this.data = response;
        this.afficherResultat = true;
        this.rechercheEffectuee.emit(this.data);
        this.afficherResultatRecherche.emit(this.afficherResultat);
      },
      error: () => {
        this.afficherResultat = false;
        alert('Animal non trouvé');
      }
    })
  }


}
