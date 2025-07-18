import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { BehaviorSubject, Observable, of, pipe, tap } from 'rxjs';
import { UtilisateurService } from '../utilisateurService/utilisateur-service.service';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkToken())
  authStatus$ = this.isAuthenticatedSubject.asObservable();
  public userInfoSubject = new BehaviorSubject<User | null>(null);
  public userInfo$ = this.userInfoSubject.asObservable();


  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private jwt: JwtHelperService,
    private router: Router, private utilisateurService: UtilisateurService) { }

  login(email: string, motDePasse: string) {
    return this.http.post<{ accessToken: string }>(
      `${this.API_URL}/login`, { email, motDePasse }
    ).pipe(
      tap(res => localStorage.setItem('access_token', res.accessToken)),
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigateByUrl('/connexion');
  }

  private checkToken(): boolean {
    const token = localStorage.getItem('access_token');
    if (token != null && !this.jwt.isTokenExpired(token)) {
      return true;
    } else {
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/connexion');
      return false;
    }

  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }


  refreshAuthStatus() {
    const isValid = this.checkToken();
    this.isAuthenticatedSubject.next(isValid);
  }


  getUserInfo(): Observable<User | null> {
    const cachedUser = this.userInfoSubject.value;
    if (cachedUser) {
      return of(cachedUser);
    }
    return this.fetchUserByToken();
  }


  refreshUserInfo(): Observable<User | null> {
    return this.fetchUserByToken();
  }

  private fetchUserByToken(): Observable<User | null> {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decoToken = this.jwt.decodeToken(token);
      const userId = decoToken.id;
      return this.utilisateurService.getUserById(userId).pipe(
        tap(user => this.userInfoSubject.next(user))
      );
    } else {
      return of(null);
    }
  }


}


