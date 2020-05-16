import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { User } from "./user.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginMode = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onChangeMode() {
    this.loginMode = !this.loginMode
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let user = new User(form.value.email, form.value.password)
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
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    })

    form.reset()
  }

}
