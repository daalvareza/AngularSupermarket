import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  showPassword : boolean = false;
  error: string | undefined;

  constructor(private router: Router, private userService: UserService) {}

  login() {
    const user : User | undefined = this.userService.getUser(this.email);
    if (user) {
      if (user.password === this.password) {
        this.userService.setCurrentUser(user);
        this.router.navigate(['/home']);
      } else {
        this.error = "Password is incorrect";
      }
    } else {
      this.error= "User doesn't exists";
    }
  }

  register() {
    if (this.userService.getUser(this.email)) {
      this.error = "User already exists";
    } else {
      const newUser: User = {
        id: this.userService.getUsers().length,
        email: this.email,
        password: this.password,
        role: "user"
      };
      this.userService.createUser(newUser);
      this.userService.setCurrentUser(newUser);
      this.router.navigate(['/home']);
    }
  }
}
