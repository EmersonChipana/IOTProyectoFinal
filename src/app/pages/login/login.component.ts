import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/services/googleAuth/google.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: GoogleService, private userService: UserService) {}

  ngOnInit(): void {
    if(localStorage.getItem('uid') != null){
      this.router.navigate(['/home']);
    }
  }

  login(){
    this.auth.GoogleAuth();
  }

}

