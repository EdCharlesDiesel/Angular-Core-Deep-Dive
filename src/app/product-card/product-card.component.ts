import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../models/course';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Course;
  @Output() productSelected = new EventEmitter<Course>();
  constructor() {}
  public onProductViewed() {
    alert('Yes the button is working');
    this.productSelected.emit(this.product);
  }
}
