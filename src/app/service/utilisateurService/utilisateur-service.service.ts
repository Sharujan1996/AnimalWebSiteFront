import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserUpdated } from 'src/app/model/user.updated.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    return this.http.get<User>(`http://localhost:8080/api/utilisateur/${id}`);
  }

  deleteUserById(id: number) {
    return this.http.delete<User>(`http://localhost:8080/api/utilisateur/${id}`);
  }

  addUser(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/api/utilisateur', user, { withCredentials: true });
  }

  updateUser(id: number, user: UserUpdated) {
    return this.http.put<User>(`http://localhost:8080/api/utilisateur/${id}`, user);
  }

  updatePasswordByEmail(email: string, motDePasse: string) {
    return this.http.put(`http://localhost:8080/api/utilisateur`, { email, motDePasse });
  }


}
