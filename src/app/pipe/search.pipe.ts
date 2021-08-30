import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(carts: any, searchText: any): any {
    
    if(!searchText) 
    {return carts;
    }
    if(searchText)
    {
   return  carts.filter(x=>x.productname.toLowerCase().includes(searchText.toLowerCase()) );
    }
  }
}
