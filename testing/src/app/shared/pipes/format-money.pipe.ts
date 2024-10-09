import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney',
  standalone: true
})
export class FormatMoneyPipe implements PipeTransform {

  transform(value: number): string {
    return '$' + value.toFixed(2);
  }

}
