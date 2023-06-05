import {Component} from '@angular/core';
import {Products} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourses = Products[0];
  rxjsCourses = Products[1];
  ngRxCourses = Products[2];
}
