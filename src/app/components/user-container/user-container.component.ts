import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  image: string | null = "";
  name: string | null = "";
  email: string | null = "";

  constructor() { }

  ngOnInit(): void {
    this.image = localStorage.getItem('photo');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }

}
