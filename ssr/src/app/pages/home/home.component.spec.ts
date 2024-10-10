import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../data/product.service';
import { of } from 'rxjs';
import { products } from '../../services/mocks/product.mock';
import { provideRouter } from '@angular/router';
import { PRODUCT_ROUTES } from '../../product.routes';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ProductListComponent],
      providers: [
        provideRouter(PRODUCT_ROUTES),
        {
          provide: ProductService,
          useValue: {
            find() {
              return of(products);
            }
          } 
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
