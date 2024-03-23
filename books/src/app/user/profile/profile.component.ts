import { Component, OnInit } from '@angular/core';
import { Prifile } from '../../types/user'
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 

  showEditMode: boolean = false;
  profile: Prifile = {
    username: '',
    email: ''
  }

  onEdit(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    console.log(this.form.value)
    if(this.form.invalid) {
      return;
    }
    this.profile = this.form.value as Prifile;
    const { username, email } = this.profile;

    this.userService.updateProfile(username, email).subscribe(() => {
      this.onEdit();
    })
  
  }

  onCancel(ev: Event) {
    ev.preventDefault();
    this.form.reset();
    this.onEdit();
  }

  constructor(private fb: FormBuilder, private userService: UserService) {}
  ngOnInit(): void {
    const { username, email } = this.userService.user!;

    this.profile = {
      username,
      email
    }

    this.form.setValue({
      username,
      email
    })
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
  })
}
