import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-resultat',
  templateUrl: './recherche-resultat.component.html',
  styleUrls: ['./recherche-resultat.component.css']
})
export class RechercheResultatComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {

  }


  getHabitatIcon(nomHabitat: string): string {
    const iconsMap: Record<string, string> = {
      'savane': '🌾',
      'Forêt équatoriale': '🌳',
      'Desert': '🏜️',
      'Jungle': '🌴',
      'Steppe': '🌾',
      'Banquise': '❄️',
      'Forêt boréale': '🌲',
      'Montagne': '⛰️',
      'Forêt tropicale': '🌿',
      'Récif corallien': '🐠',
    };
    return iconsMap[nomHabitat] || '❓'; // Retourne un point d'interrogation si l'habitat n'est pas trouvé


  }

}
