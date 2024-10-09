import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isFavorite]',
  standalone: true
})
export class IsFavoriteDirective {

  @Input('isFavorite') favorite = false;
  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    // fill
    this.el.nativeElement.style.fill = this.favorite ? 'red' : '';
  }

}
