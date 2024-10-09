import { inject, Injectable, signal } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

const dataFile = '/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  #http = inject(HttpClient);
  private favorites = signal<number[]>([]);

  find(filter = '') {
    return this.#http
      .get<Product[]>(dataFile)
      .pipe(
        map((result) =>
          result.filter(
            (d) =>
              d.name.toLowerCase()
                .includes(filter.toLowerCase())
          ),
        ),
      );
  }

  findPromise(filter = ''): Promise<Product[]> {
    return lastValueFrom(this.find(filter));
  }

  findById(id: number) {
    return this.#http
      .get<Product[]>(dataFile)
      .pipe(
        map((result) => result.filter((d) => d.id == id)[0]),
      );
  }

  findPromiseById(id: number) {
    return lastValueFrom(this.findById(id));
  }

  addToFavorites(product: number) {
    this.favorites.update(favs => {
      favs.push(product);
      return [...new Set(favs)];
    })
  }

  removeFavorite(product: number) {
    this.favorites.update(favs => {
      const index = favs.indexOf(product)
      console.log(index)
      if (index > -1)
        favs.splice(index, 1)
      return favs;
    })
  }

  getFavorites() {
    return this.favorites.asReadonly();
  }
}
