import { Component } from '@angular/core';
import { Book } from './shared/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-two-levels-custom-events';
  selectedBook: Book = new Book('', '');
}
