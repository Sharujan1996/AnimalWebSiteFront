import { Component, Input, OnInit, Output } from '@angular/core';
import { AnimalServiceService } from '../service/animalService/animal-service.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-recherche-filtre',
  templateUrl: './recherche-filtre.component.html',
  styleUrls: ['./recherche-filtre.component.css']
})
export class RechercheFiltreComponent implements OnInit {
  data: any;

  constructor(private animalService: AnimalServiceService) { }

  ngOnInit(): void {
    this.animalService.loadFilter().subscribe({
      next: (response) => {
        console.log("Filtres chargés :", response);
        this.data = response;
      },
      error: () => {
        console.error('Erreur lors du chargement des filtres');
      }

    })
  }

  filtrer() {

  }

}
