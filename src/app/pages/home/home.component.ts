import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Foco } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  misFocos: Foco[] = [];

  constructor(private router:Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    if(localStorage.getItem('uid') == null){
      this.router.navigate(['/login']);
    }else{
      const uid = localStorage.getItem('uid') ?? '';
      const user = await this.userService.getUser(uid);
      if(user != null){
        this.misFocos = user.focos;
      }
    }
  }
}
