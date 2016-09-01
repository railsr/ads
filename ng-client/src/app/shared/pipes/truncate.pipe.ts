import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform{
  transform(value, ad: number){
    let ex = "<br/><br/>  mode details inside ...";
    return (value && value.length > 1000) ? value.substring(0, 1000) + ex : value
  }
}
