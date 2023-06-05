import {Component} from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Core Deep Dive';

  onLogoClick() {
    alert('Hello Khotso');
  }

  onKeyup(newValue: string) {
    this.title = newValue;
  }
}
