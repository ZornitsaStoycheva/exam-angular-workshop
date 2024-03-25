import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent{
  book = {} as Book as any;
  @ViewChild('editForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {}
  
  editForm = this.fb.group(
    {title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]], 
    author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    image: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]], 
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
   price: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]]})
  

  editBook():void {
    if (this.editForm.invalid) {
      return;
    }
  

    // const { title, author, image, description, price } = this.createForm.value;
    // this.apiService.editBook(title!, author!, image!, description!, price!).subscribe(() => {
    //   this.router.navigate(['/books']);
    // });
  }
}
