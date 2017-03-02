import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private count: number = 1;
  constructor() {
    setInterval(() => {
      this.count++;
      if (this.count % 2 == 0) {
        this.title += "\nno it doesnt!";
      }else { 
        this.title += "\nyes it does!";
      }
    }, 500);
  }
}
