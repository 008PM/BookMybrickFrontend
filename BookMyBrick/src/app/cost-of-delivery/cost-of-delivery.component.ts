import { Component, OnInit } from '@angular/core';
import {Credentials} from '../models/credentials';
import { Router, ActivatedRoute,NavigationExtras  } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl  } from '@angular/forms';
import {Input,EventEmitter,Output} from '@angular/core';
import { Userdetails } from '../Models/userdetails';
import {UserAccountService} from '../shared/user-account.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-cost-of-delivery',
  templateUrl: './cost-of-delivery.component.html',
  styleUrls: ['./cost-of-delivery.component.css']
})
export class CostOfDeliveryComponent implements OnInit {
  userMailTobeSend ;//Has to be checked
  receivedUserDetails :Userdetails;
  constructor(private route: ActivatedRoute,private userservice :UserAccountService ) { }
  receivedUserValues: UserAccountService;
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.userMailTobeSend = params.id;
    });
    this.GetTheUserData();
  }
  GetTheUserData()
  {
    alert("hi")
    this.userservice.getUserDetails(this.userMailTobeSend).
    subscribe(uservalues => 
      {
        if(uservalues)
        {
          this.receivedUserValues =uservalues;
        }
        else
        {
          return "Unexpected error occured";
        }
      })
  }

 

}
