import { Component } from '@angular/core';
import { Prifile } from '../../types/user'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode: boolean = false;
  profile: Prifile = {
    username: 'Peter',
    email: 'peter@abv.bg'
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
    this.onEdit();
  }

  onCancel(ev: Event) {
    ev.preventDefault();
    this.form.reset();
    this.onEdit();
  }

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
  })
}
