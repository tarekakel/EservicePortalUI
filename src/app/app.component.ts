import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

 
  constructor(
    private accountService: AccountService) {}
  ngOnInit(): void {
    this.loadBasket()
    this.loadCurrnetUser()
  }

  loadBasket(){
    
    const basketId = localStorage.getItem('basket_id')
  }

  loadCurrnetUser(){
    const token = localStorage.getItem('token')
    this.accountService.loadCurrentUser(token).subscribe()
  }
}
