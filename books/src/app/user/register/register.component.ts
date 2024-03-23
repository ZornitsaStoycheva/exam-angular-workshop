import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/core/shared/validators/password-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(15)]], 
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
   passGroup: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    rePassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
   }, {
    validators: [matchPasswordValidator('password', 'rePassword')]
   }) })
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register():void {
    console.log(this.registerForm.value);
    if(this.registerForm.invalid) {
      return;
    }

    const { email,
       username,
       passGroup: { password, rePassword } = {}, 
      } = this.registerForm.value;

      
   this.userService.register(email!, username!, password!, rePassword!).subscribe(() => {
    this.router.navigate(['/login'])
   })
  }
}
