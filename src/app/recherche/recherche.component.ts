import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  data: any
  afficherResultat = false;



  constructor() { }

  ngOnInit(): void {
  }

  rechercheEffectuee(animal: any) {
    this.data = animal;
    console.log("Recherche effectuée pour l'animal :", this.data);
  }

  afficherResultatRecherche(afficher: boolean) {
    this.afficherResultat = afficher;

  }

}
