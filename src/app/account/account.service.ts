import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  map, of, ReplaySubject } from 'rxjs';
import {  User } from '../shared/models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http : HttpClient, private router:Router) { }

  loadCurrentUser(token : string | null){
    if(token === null){
      this.currentUserSource.next(null)
      return of(null)
    }

    let headers = new HttpHeaders()
    headers = headers.set('Authorization' , `Bearer ${token}`)

    return this.http.get<User>(this.baseUrl + 'accounts' , {headers}).pipe(
      map(user => {
        if(user){
          localStorage.setItem('token',user.token)
          this.currentUserSource.next(user)
          return user
        }else return null
        
      })
    )
  }

  login(values: any){
    return this.http.post<User>(this.baseUrl + 'accounts/login' , values).pipe(
      map(user => {
        localStorage.setItem('token',user.token)
        this.currentUserSource.next(user)
      })
    )
  }

  

  logout(){
    localStorage.removeItem('token')
    this.currentUserSource.next(null)
    this.router.navigateByUrl('/')
  }

  

  
}

