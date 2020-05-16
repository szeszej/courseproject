import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "./user.model";
import { tap, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

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
  token: string;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVKlL7MMJauWwA4sxffFukWFVp7tTXkwM", user).pipe(catchError(this.handleError))
    // , tap((response: AuthResponseData) => this.token = response.idToken)
  }

  login(user: User) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVKlL7MMJauWwA4sxffFukWFVp7tTXkwM", user).pipe(catchError(this.handleError))
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
