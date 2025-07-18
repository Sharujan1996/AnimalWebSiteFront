import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { MessagerieComponent } from './messagerie/messagerie/messagerie.component';
import { PanierComponent } from './panier/panier/panier.component';
import { ProfilComponent } from './profil/profil.component';
import { ReinitialisationMotDePasseComponent } from './reinitialisation-mot-de-passe/reinitialisation-mot-de-passe.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'reset-password', component: ReinitialisationMotDePasseComponent },
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
