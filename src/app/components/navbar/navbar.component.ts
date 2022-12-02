import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/services/googleAuth/google.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, public auth: GoogleService ) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.GoogleSignOut();
  }

}
