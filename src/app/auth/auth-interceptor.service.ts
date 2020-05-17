import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(reqObject: HttpRequest<any>, next: HttpHandler) {
    if (reqObject.url === "https://recipe-book-app-bce43.firebaseio.com/recipes.json") {
      return this.authService.user.pipe(take(1), exhaustMap(user => {
        let modifiedRequest = reqObject.clone({
          params: new HttpParams().set("auth", user.token)
        })
        return next.handle(modifiedRequest)
      }))
    }
    else {
      return next.handle(reqObject)
    }
  }
}
