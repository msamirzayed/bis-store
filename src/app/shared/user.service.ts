import { AppUser } from './models/app-user';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ObservableInput, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User,name) {
    this.db.object('/users/' + user.uid).update({
      name: name || user.displayName,
      email: user.email
    });
  }

  get(uid): Observable<AppUser> {
    return this.db.object<AppUser>('/users/' + uid).valueChanges();
}
}
