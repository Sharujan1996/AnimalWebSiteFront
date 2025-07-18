import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';
import { UtilisateurService } from 'src/app/service/utilisateurService/utilisateur-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('underlineAnim', [
      state(
        'normal',
        style({
          width: '0',
          backgroundColor: '#dc3545',
        })
      ),
      state(
        'hover',
        style({
          width: '100%',
          backgroundColor: '#dc3545',
        })
      ),
      transition('normal <=> hover', animate('300ms ease-in-out')),
    ]),
    trigger('colorChange', [
      state(
        'normal',
        style({
          color: '#28a745',
        })
      ),
      state(
        'hover',
        style({
          color: '#dc3545',
        })
      ),
      transition('normal <=> hover', animate('300ms ease')),
    ]),
  ],
})

export class HeaderComponent implements OnInit {
  nomComplet: any;
  hover = false;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  menuStates: { [key: string]: 'normal' | 'hover' } = {
    accueil: 'normal',
    recherche: 'normal',
    commande: 'normal',
    messagerie: 'normal',
    profil: 'normal'
  };

  setHover(menuItem: string, state: 'normal' | 'hover') {
    this.menuStates[menuItem] = state;
  }


  deconnexion() {
    return this.authService.logout();
  }

}
