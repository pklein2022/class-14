import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  books: Book[] = [
    new Book("The Man Who Died Twice", "Richard Osman"),
    new Book("Children of Time", "Adrian Tchaikovsky"),
    // {
    //   title: "The Man Who Died Twice",
    //   author: "author1",
    // },
    // {
    //   title: "Children of Time",
    //   author: "author2",
    // }
  ]
  @Output() bookSelected = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  onBookClick(book: Book) {
    this.bookSelected.emit(book);
    console.log(book.title);
  }

}
