import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  @Input() nombre!: String;
  @Input() id!: number;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goSecuencia(){
    this.route.navigate(['/modificarSecuencia', this.id]);
  }

}
