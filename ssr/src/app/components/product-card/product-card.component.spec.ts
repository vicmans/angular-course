import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService } from '../../data/product.service';
import { products } from '../../services/mocks/product.mock';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { PRODUCT_ROUTES } from '../../product.routes';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  let expectedProduct = {
    "id": 19,
    "name": "Especial Burger",
    "description": "Rica pasta con salsa bolognesa lista para comer",
    "price": 5.5,
    "image": "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_640.jpg"
  };

  let testDe: any;
  let testEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
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

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', expectedProduct);
    fixture.detectChanges();

    testDe = fixture.debugElement.query(By.css('.card-title'));
    testEl = testDe.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    const expectedName = expectedProduct.name;
    
    expect(testEl.textContent).toContain(expectedName);
  });

  it('should display product price formated', () => {
    const expectedPrice = '$5.50';

    const priceEl = fixture.debugElement.query(By.css('[data-testid="price"]'))
    
    expect(priceEl.nativeElement.textContent).toBe(expectedPrice);
  });
});
