import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isShownLikesBooks: boolean = false;
  isShownBuyBooks: boolean = false;

  toggleLikeBooks() {
    this.isShownLikesBooks = !this.isShownLikesBooks;
  }
  toggleBuyBooks() {
    this.isShownBuyBooks = !this.isShownBuyBooks;
  }
}
