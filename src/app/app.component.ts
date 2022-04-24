import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List App';

  getTitle() {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('ru');
  }
}
