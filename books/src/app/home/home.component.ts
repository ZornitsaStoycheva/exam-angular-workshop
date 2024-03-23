import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  books: Book[] = [];
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getBooks().subscribe((books) => {
      let reservedBooks = books.slice(-6).reverse();
      this.books = reservedBooks;
    })
  }

}
