import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { tap, catchError } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  expiresIn: string;
  localId: string;
  refreshToken: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root"
})

export class AuthService {
  user = new BehaviorSubject<User>(null);
  private logoutTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: AuthData) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVKlL7MMJauWwA4sxffFukWFVp7tTXkwM", user).pipe(catchError(this.handleError), tap(response => this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)))
  }

  login(user: AuthData) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVKlL7MMJauWwA4sxffFukWFVp7tTXkwM", user).pipe(catchError(this.handleError), tap(response => this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)))
  }

  autoLogin() {
    const userData: {email: string, id: string, _token: string, _tokenExpirationDate: string} = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
    if (loadedUser.token) {
      this.user.next(loadedUser);
      this.autoLogout(new Date(userData._tokenExpirationDate).getTime() - new Date().getTime())
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.logoutTimer) {
        clearTimeout(this.logoutTimer)
    }
    this.logoutTimer = null;
  }

  autoLogout(expiresIn: number) {
    this.logoutTimer = setTimeout(() => {
      this.logout()
    }, expiresIn);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    let expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    let user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "Nieznany błąd";
    if (!error.error || !error.error.error ) {
      return throwError(errorMessage)
    }
    switch (error.error.error.message) {
      case "EMAIL_EXISTS": errorMessage = "Konto o takim emailu już istnieje";
        break;
      case "INVALID_PASSWORD": errorMessage = "Nieprawidłowe hasło";
        break;
      case "EMAIL_NOT_FOUND": errorMessage = "Nieprawidłowy email";
        break;
      default: errorMessage = error.message;
        break;
    }
    return throwError(errorMessage)
  }
}
