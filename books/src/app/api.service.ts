import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  params: any;

  constructor(private http: HttpClient) { }

  getBooks() {
    const { apiUrl } = environment;
    //const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }

  getBook(id: string) {
    const { apiUrl } = environment;
    
    return this.http.get(`${apiUrl}/books/${id}`);
  }

  createBook(title: string, author: string, image: string, description: string, price: string) {
    const { apiUrl } = environment;
    const payload = { title, author, image, description, price }
    return this.http.post<Book>(`${apiUrl}/books`, { payload})
  }

  getMyPublish() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/books/myBooks`);
  }
}
