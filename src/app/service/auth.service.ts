import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  constructor( private firebaseAuth: AngularFireAuth) 
  {
    this.user = firebaseAuth.authState
   }

   signUp(email: string, password: string){
     this.firebaseAuth.createUserWithEmailAndPassword(email, password)
     .then( value =>{
       console.log(" registration success, ", value)
       alert("You Signed up!"); 
     }).catch(err =>{
       console.log('error', err.message)
     })
   }
   signIn (email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(
        email, password
      ).then( value =>{
        console.log("login success, ", value)
        alert("You logged in!"); 
      }).catch(err =>{
        console.log('error', err.message)
      })
  };
  
  signOut () {
    this.firebaseAuth.signOut();
    alert("You logged out!"); 
  };
}
