import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() productSelected = new EventEmitter<Product>();
  constructor() {}
  public onProductViewed() {
    alert('Yes the button is working');
    this.productSelected.emit(this.product);
  }
}
