import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Book[] = [];
  isLoading: boolean =true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe((books) => {
      let reservedBooks = books.slice(-6).reverse();
      this.books = reservedBooks;
      
      setTimeout(() => {
        this.isLoading = false;
      }, 3000)
    })
  }
}
