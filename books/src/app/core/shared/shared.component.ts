import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {

  constructor(private router: Router) {}

  loadBooks(path: string) {
    this.router.navigate([path])
  } 
}


