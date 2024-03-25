import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book, BookDetails } from 'src/app/types/book';
import { UserService } from 'src/app/user/user.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css']
})
export class CurrentBookComponent implements OnInit{
  
  book = {} as Book as any;
  isAutenticated = false;
  like = false;
onDelete(id: string) {
  this.apiService.onDelete(id).subscribe(() => {
    this.router.navigate(['/books'])
  })
}


// editBookForm: BookDetails = {
//   title: '',
//   author: '',
//   image: '',
//   description: '',
//   price: '',
  
// }

  
  get isOwner(): boolean {
    return this.userService.user?._id ===this.apiService.params.owner;
  }

  
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute, 
    private userService: UserService,
    private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      const id = data['bookId'];
      this.apiService.getBook(id).subscribe((book) => {
        console.log({book})
        this.book = book
        this.isAutenticated = this.userService.isAuthenticated;
        console.log(this.isAutenticated = this.userService.isAuthenticated);
      })
    })
    

    // this.activateRoute.params.subscribe((data) => {
    //   const id = data['bookId'];
    //   const useId = this.userService.user?._id;
    //   this.apiService.getLikeBook(id).subscribe(() => {
    //     this.like = true;
    //     this.router.navigate(['/books'])
    //   })
    // })

  }
}
