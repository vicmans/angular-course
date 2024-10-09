import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../data/product.service';
import { products } from '../../services/mocks/product.mock';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { PRODUCT_ROUTES } from '../../product.routes';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [
        provideRouter(PRODUCT_ROUTES),
        {
          provide: ProductService,
          useValue: {
            find() {
              return of(products);
            }
          } 
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
