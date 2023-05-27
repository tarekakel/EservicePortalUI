import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  baseUrl = environment.apiUrl
  constructor(private http : HttpClient) { }

  getEServives(){
    return this.http.get<any>(this.baseUrl + 'portal')
  }

}
