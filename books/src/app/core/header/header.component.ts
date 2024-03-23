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
    return this.userService.isLogged
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  logout() :void{
    // this.userService.logout();
    // this.router.navigate(['/home'])
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    })
  }

  constructor(private userService: UserService, private router: Router) {}
}
