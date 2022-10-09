import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<string>();
  mySearch: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  doSearch() {
    this.searchChanged.emit(this.mySearch);
    console.log(this.mySearch);
  }
}
