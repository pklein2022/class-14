import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-custom-event-exercise';
  searchResult: string = "test";

  updateSearch(search: string) {
    this.searchResult = search;
  }
}
