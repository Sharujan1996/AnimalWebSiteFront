import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/authService/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]]
    });
  }

  connexion() {
    this.authService.login(this.form.value.email, this.form.value.motDePasse)
      .subscribe({
        next: () => {
          alert('Connexion réussie');
          this.router.navigateByUrl('/accueil');
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          alert('Identifiants incorrects');
        }
      })
  }

}
