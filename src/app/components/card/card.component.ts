import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo: String = '';
  @Input() id: String = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  iniciarsesion() {
    this.router.navigate(['/configuracion', this.id]);
  }
}
