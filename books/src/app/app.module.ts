import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { BooksListComponent } from './books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookModule } from './book/book.module';
import { ErrorComponent } from './error/error.component';
import { HighlightBooksListDirective } from './highlight-books-list.directive';
import { appInterceptorProvider } from './app-interceptors';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HelpSharedModule } from './help-shared/help-shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksListComponent,
    ErrorComponent,
    HighlightBooksListDirective,
    HomeComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BookModule,
    AppRoutingModule,
    HelpSharedModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
