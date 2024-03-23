import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-books-list-buy',
  templateUrl: './books-list-buy.component.html',
  styleUrls: ['./books-list-buy.component.css']
})
export class BooksListBuyComponent implements OnInit{

  books= {} as Book as any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((books) => {
      let buyBooks = books.sort((b, a) => a.buyBook.length - b.buyBook.length).slice(0, 5);
      this.books = buyBooks;
    })
  }

}
