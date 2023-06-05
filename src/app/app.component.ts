import {Component} from '@angular/core';
import {Products} from '../db-data';
import {Product} from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public coreCourses = Products[0];
  public rxjsCourses = Products[1];
  public ngRxCourses = Products[2];

  public onProductSelected(product: Product) {
    console.log('On Product selected event triggered from app',product);
  }
}
