import {Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './models/course';
import {CourseCardComponent} from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('cardRef1', {read: ElementRef}) card1: CourseCardComponent;
  @ViewChild('cardRef2') card2: CourseCardComponent;
  @ViewChild('container') containerDiv: ElementRef;

  courses = COURSES;
  startDate = new Date(2000, 0, 1);
  title = COURSES[1].description;
  price = 3.66;


  course = COURSES[1];
  // public coreCourses = COURSES[0];
  // public rxjsCourses = COURSES[1];
  // public ngRxCourses = COURSES[2];

  public onCourseSelected(course: Course) {
    // console.log('On Course selected event triggered from app',course);
    console.log(this.card1);
    // console.log(this.card2);
   // console.log('containerDiv', this.containerDiv);
  }

  isImageVisible() {
    // return this.courses && this.courses.filter(x=>x== c)
  }
}
