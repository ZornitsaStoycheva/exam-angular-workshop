import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './books/books.component';
import { MyPublishComponent } from './my-publish/my-publish.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ShortenPipe } from './books/shorten.pipe';
import { LoaderComponent } from '../help-shared/loader/loader.component';
import { HelpSharedModule } from '../help-shared/help-shared.module';




@NgModule({
  declarations: [
    CreateBookComponent,
    CurrentBookComponent,
    BooksComponent,
    MyPublishComponent,
    HighlightDirective,
    EditBookComponent,
    ShortenPipe,

  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HelpSharedModule
  ]
})
export class BookModule { }
