import { Component, OnInit } from '@angular/core';
import {Credentials} from '../models/credentials';
import { Router, ActivatedRoute,NavigationExtras  } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl  } from '@angular/forms';
import {Input,EventEmitter,Output} from '@angular/core';
import { Userdetails } from '../Models/userdetails';
import {UserAccountService} from '../shared/user-account.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private userService: UserAccountService,private router: Router,private activatedRoute: ActivatedRoute){}
  ngOnInit() {}

    //Defining the elements of the formcontrol
    formdata = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
     });
    // {formdata}: { formdata: Credentials}
     userLoginDetails:Credentials//to be send to brickdelivery
     debugger;
     //Email=this.formdata.value.email;
     //Password =this.formdata.value.password;
     loginUser()
     {
       this.debugger;
       this.userService.login(this.formdata.value.email,this.formdata.value.password).
       subscribe(result => 
        {
          if(result)
          {
            this.router.navigate(['deliveryCost',this.formdata.value.email]);
          }
        } 
    )}
}
