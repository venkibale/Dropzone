import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'elipsized'})
export class ElipsizedPipe implements PipeTransform {
  transform(value: string, exponent?: number): string {
    // if (value.length >= 25) {
    //   console.log(value)
    //   return value.slice(0, 8) + '...' + value.slice(-3);
    // } else {
    //   return value;
    // }
    return value.length >= 25 ? value.slice(0, 8) + '...' + value.slice(-3) : value ;
  }
}
