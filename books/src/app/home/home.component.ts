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
  isLoading: boolean = true;
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getBooksHome().subscribe((books) => {
      let lastBooks = books.slice(0, 3);
      this.books = lastBooks;

      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    })
  }

}
