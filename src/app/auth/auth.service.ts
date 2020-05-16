import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { tap, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  expiresIn: string;
  localId: string;
  refreshToken: string;
}

@Injectable({
  providedIn: "root"
})

export class AuthService {
  token: string;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVKlL7MMJauWwA4sxffFukWFVp7tTXkwM", user).pipe(catchError(
      error => {
        let errorMessage: string = "Nieznany błąd";
        if (!error.error || !error.error.error ) {
          return throwError(errorMessage)
        }
        switch (error.error.error.message) {
          case "EMAIL_EXISTS": errorMessage = "Konto o takim emailu już istnieje";
            break;
          default: errorMessage = error.message;
            break;
        }
        return throwError(errorMessage)
      }
    ), tap((response: AuthResponseData) => this.token = response.idToken))
  }
}
