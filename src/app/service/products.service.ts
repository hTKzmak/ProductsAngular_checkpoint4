import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  // массив продуктов / название продукта (значение input:text)
  public products: any[] = [];
  public productTitle: string = ''

  // массив категорий / название категории
  public categories: Set<any> | undefined;
  public categoryName: string = 'All';

  // максимальныя цена / минимальная цена / итоговая цена (значение input:target) 
  public maxPrice: number = 0;
  public minPrice: number = 0;
  public totalPrice: number = 0;
  
  // максимальный рейтинг / минимальный рейтинг / итоговый рейтинг (значение input:target) 
  public minRating: number = 0;
  public maxRating: number = 5;
  public totalRating: number = this.maxRating;



  // функция по получению данных
  public async fetchProductsData(): Promise<void> {
    await fetch('https://dummyjson.com/products?limit=50')
      .then(res => res.json())
      .then(data => {
        // добавление данных в массив products
        this.products = data.products

        // находим цены и передаём в переменные максимальную и минимальную цену:
        const prices = this.products.map(elem => elem.price)
        this.maxPrice = Math.max(...prices)
        this.totalPrice = Math.max(...prices)
        this.minPrice = Math.min(...prices)

        // добавляем все существующие категории
        this.categories = new Set(this.products.map(el => el.category))
      })
  }

  // функция по фильтрации данных
  public computedProducts(): any[] {
    return this.products
      // фильтруем массив products в зависимости от того, что написано в productTitle
      .filter(el => el.title.toLowerCase().includes(this.productTitle.toLowerCase()))
      // фильтруем массив products в зависимости от того, какое значение в categoryName
      .filter(el => this.categoryName === 'All' ? this.products : el.category === this.categoryName)
      // фильтруем массив products в зависимости от значения totalPrice
      .filter(el => el.price <= this.totalPrice)
      // фильтруем массив products в зависимости от значения totalRating
      .filter(el => Math.round(el.rating) <= this.totalRating)
  }
}