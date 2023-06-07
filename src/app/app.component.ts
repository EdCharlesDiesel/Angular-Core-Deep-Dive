import {Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './models/course';
import {CourseCardComponent} from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  startDate = new Date(2000,0,1);
  title = COURSES[1].description;
  price= 3.66;
  @ViewChild(CourseCardComponent)
  card:CourseCardComponent;

  course = COURSES[1];
  // public coreCourses = COURSES[0];
  // public rxjsCourses = COURSES[1];
  // public ngRxCourses = COURSES[2];

  public onCourseSelected(course: Course) {
    //console.log('On Course selected event triggered from app',course);
    console.log(this.card);
  }

  isImageVisible() {
    // return this.courses && this.courses.filter(x=>x== c)
  }
}
