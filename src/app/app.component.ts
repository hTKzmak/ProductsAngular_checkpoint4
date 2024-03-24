import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, DataFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public productsService = inject(ProductsService)
}
