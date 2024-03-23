import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  @ViewChild('createForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {}
  
  createForm = this.fb.group(
    {title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]], 
    author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    image: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]], 
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
   price: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]]})
  

    createHadler() {
    //console.log(this.createForm.value);
    debugger
    if(!this.createForm) {
      return;
    }

    const form = this.createForm;

    if(form?.invalid) {
      console.log('Form is invalid!');
      return;
    }
    console.log(form.value)

    const { title, author, image, description, price } = form?.value;
    form.reset();
  }

  createBook(ev: Event, title: string, author: string, image: string, price: string, description: string) {
    ev.preventDefault();
    //console.log({ title, author, image, description, price})
    this.apiService.createBook( title, author, image, description, price).subscribe((data) => {
      console.log({data})
      this.router.navigate(['/books'])
    })
  }
}