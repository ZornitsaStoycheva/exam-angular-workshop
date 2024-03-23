import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  // isShown: boolean = true;

  // toggle() {
  //   this.isShown = !this.isShown;
  // }
  books = { } as Book as any;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe((books) => {
      console.log(books)
      let likedBooks = books.sort((b, a) => a.likes.length - b.likes.length).slice(0, 5);
      this.books = likedBooks;
    })
    
  }
}
