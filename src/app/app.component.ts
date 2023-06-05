import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './models/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  // public coreCourses = COURSES[0];
  // public rxjsCourses = COURSES[1];
  // public ngRxCourses = COURSES[2];

  public onCourseSelected(course: Course) {
    console.log('On Course selected event triggered from app',course);
  }
}
