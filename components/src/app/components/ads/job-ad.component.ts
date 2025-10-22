import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-ad',
  imports: [],
  template: `
    <div class="job-ad">
      <h4>{{ headline }}</h4>
      {{ body }}
    </div>
  `,
  styles: ``
})
export class JobAdComponent {
  @Input() headline!: string;
  @Input() body!: string;
}
