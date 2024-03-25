import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { AuthActivate } from '../guards/auth.activate';
import { MyPublishComponent } from './my-publish/my-publish.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
   {path: 'books', component: BooksComponent},
   {path: 'books/create', component: CreateBookComponent},//, canActivate: [AuthActivate]},
   {path: 'books/:bookId', component: CurrentBookComponent},
   {path: 'books/edit/:bookId', component: EditBookComponent},
   {path: 'myBooks', component: MyPublishComponent}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
