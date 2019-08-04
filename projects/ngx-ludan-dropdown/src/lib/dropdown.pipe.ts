import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdownPipe'
})
export class DropdownPipe implements PipeTransform {
  transform(items: any[], selectedItem: any): any[] {
    if (!items) return null;
    if (!selectedItem) return items;

    return items.filter(item => {
      if (item !== selectedItem) return item;
    });
  }
}
