import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, StarComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() price: number = 0;
  @Input() rating: number = 0;
  @Input() image: string = '';
}
