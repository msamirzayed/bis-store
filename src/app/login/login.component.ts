import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';
import { User } from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  l
  singUpr
  singInr
  aa
  message = 'sorry'
  constructor(private auth:AuthService,
    private u:UserService,
    private route:ActivatedRoute,
    private _snackBar: MatSnackBar) { }
n

  ngOnInit():void {
    this.auth.signInerr.subscribe(r=>{
      this.singInr = r
      this.aa =r
    })
    this.auth.signUperr.subscribe(r=>{
      this.singUpr = r
      this.aa = r
    })
 this.route.queryParams.subscribe(r=>{
        this.n = r.n
      })
  }

  signUp(fsign){
      this.auth.SignUp(fsign.email,fsign.password,fsign.username)


  }
  login(flogin){
    this.auth.SignIn(flogin.email,flogin.password)

  }
  logOut(){
    this.auth.logout();
  }
  loginGoogle(){
    this.auth.loginGoogle()
  }
 

 openSnackBarUp(message,action) {
   if(this.singUpr){
    message="sorry!"
    action  = this.singUpr
     this._snackBar.open(message, action, {
       duration: 2000,
     });
   }else{
     message = 'something went wrong please try again!'
     action= ':('
    this._snackBar.open(message, action, {
      duration: 2000,
    });
   }


  }

  // openSnackBarIn(message,action) {
  //   if(this.singInr){
  //    message="sorry!"
  //    action  = this.singInr
  //     this._snackBar.open(message, action, {
  //       duration: 2000,
  //     });
  //   }else{
  //     message = 'something went wrong please try again!'
  //     action= ':('
  //    this._snackBar.open(message, action, {
  //      duration: 2000,
  //    });
  //   }


  //  }


}
