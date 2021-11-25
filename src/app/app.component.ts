import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string;
  count: number;
  newTask: string;
  add() {
    if (this.text) {
      this.newTask = this.text;
      this.text = '';
      this.count++;
    }
  }
  changeCount(n:number) {
    this.count = n;
  }
}
