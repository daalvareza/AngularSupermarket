import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import userData from "../../assets/database/users.json";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = userData.users;
  private currentUser = new BehaviorSubject<User | undefined>(undefined);

  constructor() {}

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(email : string) {
    return this.users.find((u) => u.email === email);
  }

  createUser(user: User) {
    this.users.push(user);
  }
}
