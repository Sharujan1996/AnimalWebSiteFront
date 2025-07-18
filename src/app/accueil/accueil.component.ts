import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/authService/auth-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  data: any;
  nomComplet: string | undefined;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.getUserInfo()?.subscribe({
      next: (response: any) => {
        this.data = response;
        this.nomComplet = `${response.nom} ${response.prenom}`;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    });
  }

}



