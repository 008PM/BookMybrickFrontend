import { Injectable } from '@angular/core';
import {Credentials} from '../Models/credentials';
import { Observable, config, from } from 'rxjs';
import { MappingsContext } from 'source-list-map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,tap, isEmpty, filter} from 'rxjs/operators'
import {BehaviorSubject} from 'rxjs';
import {Userdetails} from '../Models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http:HttpClient){}
  // login(Email:string,Password:string)
  // {
  //   return null;
  // }
  login(email:string,password:string):Observable<any>
  {
    debugger;
    let headers = new HttpHeaders();
    let loginbody = JSON.stringify({email,password});
    let headersOptions ={headers : new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<boolean>("https://localhost:5005/api/Account/userLogin",loginbody,headersOptions)
    .pipe(map(values=>values),tap(values=>console.log(JSON.stringify(values),alert("You have logged in successfully"))));
  }

  getUserDetails(userMailTobeSend: string) : Observable<any>
  {
    debugger;
    let headers = new HttpHeaders();
    let loginbody = JSON.stringify({userMailTobeSend});
    let headersOptions ={headers : new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Userdetails>("https://localhost:5000/api/Account/getUserDetails",userMailTobeSend,headersOptions)
    .pipe(map(values=>values),tap(values=>console.log(JSON.stringify(values))));
  }
}
