import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookAddComponent } from './components/book-add/book-add.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
