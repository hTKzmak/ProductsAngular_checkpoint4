import { Component, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  public productsService = inject(ProductsService)

  ngOnInit(): void {
      this.productsService.fetchProductsData()
  }
}
