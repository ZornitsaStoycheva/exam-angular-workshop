import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //@ViewChild('loginForm') form: NgForm | undefined;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    // this.userService.loadUsers().subscribe({
    //   next: (data) => console.log(data)
    // })
  }

  login(form: NgForm) : void {
    
    if(form.invalid) {
      return;
    }

    const { email, password } = form.value;
    // this.userService.login();
    // this.router.navigate(['/home'])
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }
  
  // loginHandler() {
    
  //   if(!this.form) {
  //     return;
  //   }

  //   const form = this.form;

  //   if(form?.invalid) {
  //     console.log('Form is invalid!');
  //     return;
  //   }
  //   console.log(form.value)

  //   const { email, password } = form?.value;
  //   form.reset();
  // }
}
