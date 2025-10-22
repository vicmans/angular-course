import { Component } from '@angular/core';

@Component({
  selector: 'button[baseButton],a[baseButton]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'style': `
      padding: 1rem 1.5rem;
      border: 1px solid lightblue;
      cursor: pointer;
      background-color: lightgray;
    `
  }
})
export class ButtonComponent {

}
