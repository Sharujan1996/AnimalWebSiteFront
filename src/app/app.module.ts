import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandeComponent } from './commande/commande/commande.component';
import { MessagerieComponent } from './messagerie/messagerie/messagerie.component';
import { PanierComponent } from './panier/panier/panier.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfilComponent } from './profil/profil.component';
import { ReinitialisationMotDePasseComponent } from './reinitialisation-mot-de-passe/reinitialisation-mot-de-passe.component';
import { RechercheEntreeComponent } from './recherche-entree/recherche-entree.component';
import { RechercheFiltreComponent } from './recherche-filtre/recherche-filtre.component';
import { RechercheResultatComponent } from './recherche-resultat/recherche-resultat.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResultatFiltreComponent } from './resultat-filtre/resultat-filtre.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    CommandeComponent,
    MessagerieComponent,
    PanierComponent,
    RechercheComponent,
    ProfilComponent,
    ReinitialisationMotDePasseComponent,
    RechercheEntreeComponent,
    RechercheFiltreComponent,
    RechercheResultatComponent,
    ResultatFiltreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/auth/login'],
      }
    })

  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
