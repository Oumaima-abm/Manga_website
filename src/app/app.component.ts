import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Arisu in Borderland';
  email: string;
  password: string;
  data: any={};

constructor (public authService: AuthService, private _httpClient: HttpClient){
  this.email= '';
  this.password= '';
}
ngOnInit() {
  this.getData();
}
getData(){
  return this._httpClient.get("https://us-central1-tp-baas-oumaima-abm.cloudfunctions.net/helloWorld").subscribe(dataFirestore => {
    console.log("data", dataFirestore);
    this.data = dataFirestore;
  });
}

signUp(){
this.authService.signUp(this.email, this.password)
this.email=this.password=''
}
signIn(){
  this.authService.signIn(this.email, this.password)
  this.email=this.password=''
}
signOut(){
this.authService.signOut()
}
}
