import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/authService/auth-service.service';
import { UtilisateurService } from '../service/utilisateurService/utilisateur-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  form: FormGroup;
  data: any;
  age: number | undefined;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService, private utilisateurService: UtilisateurService) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.pattern(/^(\+33|0)[1-9](\d{2}){4}$/)],
      sexe: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.authService.getUserInfo()?.subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
        this.age = new Date().getFullYear() - new Date(response.dateDeNaissance).getFullYear();
        this.form.patchValue({
          nom: response.nom,
          prenom: response.prenom,
          telephone: response.telephone,
          sexe: response.sexe,
        })
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    });
  }

  updateProfile() {
    return this.utilisateurService.updateUser(this.data.id, this.form.value).subscribe({
      next: () => {
        alert("Votre profil a été mis à jour avec succès.");
      },
      error: () => {
        alert("Une erreur s'est produite lors de la mise à jour de votre profil. Veuillez réessayer plus tard.");
      }
    });
  }

  deleteProfile() {
    return this.utilisateurService.deleteUserById(this.data.id).subscribe({
      next: () => {
        alert("Votre compte a été supprimé avec succès.");
        localStorage.removeItem('access_token');
        this.authService.isAuthenticatedSubject.next(false);
        this.router.navigate(['/connexion']);
      }, error: () => {
        alert("Une erreur s'est produite lors de la suppression de votre compte. Veuillez réessayer plus tard.");
      }
    });

  }

}
