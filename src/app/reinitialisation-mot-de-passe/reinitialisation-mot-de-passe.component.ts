import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../service/utilisateurService/utilisateur-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reinitialisation-mot-de-passe',
  templateUrl: './reinitialisation-mot-de-passe.component.html',
  styleUrls: ['./reinitialisation-mot-de-passe.component.css']
})
export class ReinitialisationMotDePasseComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      confirmationMotDePasse: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  resetPassword() {
    if (this.form.valid) {
      if (this.form.value.motDePasse === this.form.value.confirmationMotDePasse) {
        this.utilisateurService.updatePasswordByEmail(this.form.value.email, this.form.value.motDePasse).subscribe({
          next: () => {
            alert("Votre mot de passe a été réinistialisé avec succès");
            this.router.navigate(['/connexion']);
          },
          error: () => {
            alert("Votre mot de passe n'a pas pu être réinitialisé. Veuillez vérifier votre email et réessayer.");
          }
        })
      }
    }
  }

}
