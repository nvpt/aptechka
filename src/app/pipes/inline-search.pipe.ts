import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inlineSearch'
})
export class InlineSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
