
import { PipeTransform, Pipe } from '@angular/core';
import * as marked from 'marked';

@Pipe({name: 'md'})
export class MdPipe implements PipeTransform {
  transform(value, args) {
    if (value)
      return marked.parse(value);
  }
}
