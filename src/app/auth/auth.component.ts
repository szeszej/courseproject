import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { AuthData } from "./auth-data.model";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}

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
      this.isLoading = false;
      this.router.navigate(["/recipes"])
    }, errorMessage => {
      this.error = errorMessage;
      this.showErrorAlert(errorMessage)
      this.isLoading = false;
    })

    form.reset()
  }

  showErrorAlert(error: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const placement = this.alertHost.viewContainerRef;
    placement.clear();
    const alertComponent = placement.createComponent(componentFactory);
    alertComponent.instance.message = error;
    this.subscription = alertComponent.instance.close.subscribe(() => {
      this.error = null;
      this.subscription.unsubscribe();
      placement.clear();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
