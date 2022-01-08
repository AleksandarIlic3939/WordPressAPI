import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../models/blog';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      if (it instanceof Blog) {
        return it.title.toLocaleLowerCase().includes(searchText);
      } else {
        return it.title.rendered.toLocaleLowerCase().includes(searchText);
      }
      
    });
  }

}
