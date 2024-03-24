import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from './types/book';
import { User, UserId } from './types/user';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  params: any;

  constructor(private http: HttpClient, private userService: UserService) { }
  user: User | undefined;
  
  getBooks() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }

  getBooksHome() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/home`)
  }

  getBook(id: string) {
    const { apiUrl } = environment;
    
    return this.http.get(`${apiUrl}/books/${id}`);
  }

  createBook(title: string, author: string, image: string, description: string, price: string) {
    const { apiUrl } = environment;
    const payload = { title, author, image, description, price }
    return this.http.post<Book>(`/api/books/create`, { payload, user:this.user?._id})
  }

  getMyPublish() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/books/myBooks`);
  }
}
