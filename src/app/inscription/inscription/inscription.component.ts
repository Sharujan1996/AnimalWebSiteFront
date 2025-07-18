import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';
import { UtilisateurService } from 'src/app/service/utilisateurService/utilisateur-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  form: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router, private jwt: JwtHelperService, private authServiceService: AuthServiceService) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      sexe: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      telephone: ['', Validators.pattern(/^(\+33|0)[1-9](\d{2}){4}$/)]
    });
  }


  inscription() {
    if (this.form.valid) {
      this.utilisateurService.addUser(this.form.value).subscribe({
        next: (response) => {
          console.log("Utilisateur inscrit avec succés", response);
          alert("Inscription réussie !")
          this.errorMessage = '';
          localStorage.setItem('access_token', response.accessToken);
          this.authServiceService.isAuthenticatedSubject.next(true);
          this.router.navigate(['/accueil']);
        }, error: (error) => {
          if (error.status === 400 || error.status === 409) {
            this.errorMessage = error.error.message || 'Erreur : Email déjà utilisé.';
          } else {
            this.errorMessage = 'Erreur serveur. Veuillez réessayer.';
          }
        }
      });
    }

  }


}
