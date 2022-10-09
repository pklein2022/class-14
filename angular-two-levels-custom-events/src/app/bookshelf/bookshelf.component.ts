import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();

  selectedBook: Book = new Book("default title", "default author");

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(book: Book) {
    this.bookSelected.emit(book);
    console.log("bookshelf");
  }
}
