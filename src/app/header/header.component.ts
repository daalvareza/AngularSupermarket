import { Component } from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUser: string = "";
  userSubscription: Subscription | undefined;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.currentUser = user.email;
      }
    })
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toCart() {
    this.router.navigate(['/cart']);
  }

  toHome() {
    this.router.navigate(['/home']);
  }
}
