import { Component, Input } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-filter.component.html',
  styleUrl: './data-filter.component.css'
})
export class DataFilterComponent{
  public categories: any[] = [];
  @Input() maxPrice: number = this.productsService.maxPrice 
  @Input() minPrice: number = this.productsService.minPrice 
  @Input() totalPrice: number = this.productsService.totalPrice

  @Input() maxRating: number = this.productsService.maxRating
  @Input() minRating: number = this.productsService.minRating
  @Input() totalRating: number = this.productsService.totalRating

  constructor(public productsService: ProductsService) { }
}