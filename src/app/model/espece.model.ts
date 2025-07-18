import { Famille } from "./famille.model";

export interface Espece {
    nom_espece: string;
    description_espece: string;
    famille: Famille;

}