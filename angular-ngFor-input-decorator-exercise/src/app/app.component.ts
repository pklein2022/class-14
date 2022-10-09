import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator-exercise';
  users: {
    username: string,
    id: number
  }[] = [{
    username: "Pamcakes",
    id: 1,
  },
  {
    username: "logic777",
    id: 2,
  },
  {
    username: "ace555",
    id: 3
  }
    ]
}




