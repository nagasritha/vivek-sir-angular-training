import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.books=this.bookService.getBooks();
    console.log('this.books',this.books);
    
  }



}
