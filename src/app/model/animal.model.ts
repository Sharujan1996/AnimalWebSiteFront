import { Espece } from "./espece.model";
import { Habitat } from "./habitat.model";

export interface Animal {
    nom_animal: string;
    taille: number;
    poids: number;
    description_animal: string;
    esperance_de_vie: number;
    photo_url: string;
    regime_alimentaire: string;
    espece: Espece;
    habitats: Habitat[];

}