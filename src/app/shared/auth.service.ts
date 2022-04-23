import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, empty, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {switchMap } from 'rxjs/operators';

import { of } from 'rxjs';
import { NewUser } from './models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUperr = new Subject<any>();
  signInerr = new Subject<any>();
  user$: Observable<firebase.User>;
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router:Router) {
    this.user$ = afAuth.authState;
  }

  loginGoogle() {

 return  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(r=>{
    this.userService.save(r.user,r.user.displayName)
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.router.navigate([returnUrl])
   })

  //  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //  localStorage.setItem('returnUrl', returnUrl);
  }



 /* Sign up */
SignUp(email: string, password: string,name) {
  this.afAuth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  this.userService.save(res.user,name)
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  localStorage.setItem('returnUrl', returnUrl);
  this.router.navigate([returnUrl])
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  this.signUperr.next(`${error.message}`)
  });
  }

/* Sign in */
SignIn(email: string, password: string) {
this.afAuth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
localStorage.setItem('returnUrl', returnUrl);
 this.router.navigate([returnUrl])
})
.catch(err => {
console.log('Something is wrong:',err.message);
this.signInerr.next(`${err.message}`)

});
}

  logout() {
    this.afAuth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .pipe(switchMap((user) =>  {
        if (user) return this.userService.get(user.uid);
        return of(null);
      }));
  }


}
