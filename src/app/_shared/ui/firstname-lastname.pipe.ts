import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstnameLastname'
})
export class FirstnameLastnamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const words = value.split(' ');
    if (words.length === 1) {
      return words[0];
    }
    if (words.length >= 2) {
      return words[0] + ' ' + words[words.length - 1];
    }
    return '';
  }
}
