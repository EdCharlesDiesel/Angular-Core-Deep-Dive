import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../models/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course: Course;

  @Input() cardIndex: number;

  //The name of the DOM property to which the output property is bound. Optional.
  @Output('courseSelected') courseEventEmitter = new EventEmitter<Course>();

  constructor() {
  }

  public onCourseViewed() {
    console.log('card component - button clicked.....')
    this.courseEventEmitter.emit(this.course);
  }

  public isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  public cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  public cardStyles() {
      return {
         'background-image': 'url(' + this.course.iconUrl + ')'
      };
  }
}
