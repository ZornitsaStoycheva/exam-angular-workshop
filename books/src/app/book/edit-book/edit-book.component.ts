import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  book = {} as Book as any;
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      const id = data['bookId'];
      this.apiService.getBook(id).subscribe((book) => {
        console.log({book})
        this.book = book
      })
    })
    
  }
}
