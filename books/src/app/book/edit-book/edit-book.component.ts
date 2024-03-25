import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book, BookDetails } from 'src/app/types/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  book = {} as Book as any;
  
  @ViewChild('editForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
   
  }
  allBook = this.book;
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      const id = data['bookId'];
      this.apiService.getBook(id).subscribe((book) => {
        console.log({book})
        this.book = book

        const { title, author, image, description, price } = this.book
        console.log(this.book)
        this.editBookForm = {
          title,
          author,
          image,
          description,
          price
        }
      
      this.form?.setValue({
        title,
        author,
        image,
        description,
        price
      })
      })
    })
  //   const { title, author, image, description, price } = this.book
  //   console.log(this.book)
  //   this.editBookForm = {
  //     title,
  //     author,
  //     image,
  //     description,
  //     price
  //   }
  
  // this.form?.setValue({
  //   title,
  //   author,
  //   image,
  //   description,
  //   price
  // })
  }
  
  
  editForm = this.fb.group(
    {title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]], 
    author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    image: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]], 
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
   price: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]]})

   editBookForm: BookDetails = {
     title: '',
     author: '',
     image: '',
     description: '',
     price: '',
     
   }

  editBook():void {
    if (this.editForm.invalid) {
      return;
    }
    this.activateRoute.params.subscribe((data) => {
      const id = data['bookId'];
      const {title, author, image, description, price} = this.editForm.value;
      console.log(this.editForm.value)
    this.apiService.onEditBookValue(id, title!, author!, image!, description!, price!).subscribe(() => {
      console.log(this.book)
      this.router.navigate(['/books']);
    })
    });
  }
  
  
}
