import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { User } from '../shared/models/user';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit{

  constructor(public accountService: AccountService,
    private portalService : PortalService){
    
  }
  ngOnInit(): void {
    this.portalService.getEServives().subscribe()
  }

}
