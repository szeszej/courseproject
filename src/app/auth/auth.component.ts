import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { AuthData } from "./auth-data.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onChangeMode() {
    this.loginMode = !this.loginMode
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let user = new AuthData (form.value.email, form.value.password)
    this.isLoading = true;
    this.error = null;
    let authObservable: Observable<AuthResponseData>
    if (this.loginMode) {
      authObservable = this.authService.login(user)
    } else {
      authObservable = this.authService.register(user)
    }

    authObservable.subscribe(response => {
      console.log(response);
      this.isLoading = false;
      this.router.navigate(["/recipes"])
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    })

    form.reset()
  }

}
