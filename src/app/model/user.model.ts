export interface User {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    sexe: string;
    dateDeNaissance: Date;
    telephone?: string;
}