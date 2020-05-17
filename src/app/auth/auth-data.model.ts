export class AuthData {
  public email: string;
  public password: string;
  public returnSecureToken = true
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
