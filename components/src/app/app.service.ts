import { Injectable, Type } from '@angular/core';
import { delay, of } from 'rxjs';
import { JobAdComponent } from './components/ads/job-ad.component';
import { ProductAdComponent } from './components/ads/product-ad.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private users = [
    { name: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { name: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { name: 'Michael', lastName: 'Johnson', email: 'michael.johnson@example.com' },
    { name: 'Emily', lastName: 'Williams', email: 'emily.williams@example.com' },
    { name: 'Chris', lastName: 'Brown', email: 'chris.brown@example.com' },
    { name: 'Katie', lastName: 'Davis', email: 'katie.davis@example.com' },
    { name: 'David', lastName: 'Miller', email: 'david.miller@example.com' },
    { name: 'Sarah', lastName: 'Wilson', email: 'sarah.wilson@example.com' },
    { name: 'James', lastName: 'Moore', email: 'james.moore@example.com' },
    { name: 'Laura', lastName: 'Taylor', email: 'laura.taylor@example.com' }
  ];

  getUsers() {
    return of(this.users).pipe(delay(2000));
  }

  getAds() {
    return [
      {
        component: ProductAdComponent,
        inputs: { name: 'The new Iphone 20 is waiting for you', bio: 'Click here and see details' },
      },
      {
        component: ProductAdComponent,
        inputs: { name: 'AI generative using AI', bio: 'Generate your own AI models using AI to create AI' },
      },
      {
        component: JobAdComponent,
        inputs: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        },
      },
      {
        component: JobAdComponent,
        inputs: {
          headline: 'Openings in all departments',
          body: 'Apply today',
        },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}
