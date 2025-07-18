import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from 'src/app/model/animal.model';
import { FilterDataModel } from 'src/app/model/filter.data.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  constructor(private http: HttpClient) { }

  getAnimalInfoByNom(nom_animal: string) {
    return this.http.get<Animal>(`http://localhost:8080/api/animal/${nom_animal}`);
  }

  loadFilter() {
    return this.http.get<FilterDataModel>('http://localhost:8080/api/animal/filter');
  }
}
