import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn(): boolean {
    return this.userService.isAuthenticated
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  logout() :void{

    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.router.navigate(['/auth/login'])
      }
    })
  }

  constructor(private userService: UserService, private router: Router) {}
}
