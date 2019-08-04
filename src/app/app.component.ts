import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="wrapper">
      <ludan-dropdown
        [items]="items"
        (selectEvent)="selectItem($event)"
        [selectedItem]="selectedItem"
      ></ludan-dropdown>
    </div>
  `
})
export class AppComponent {
  items = ['item 1', 'item 2', 'item 3', 'item 4'];
  selectedItem: any;

  selectItem = item => {
    this.selectedItem = item;
  }
}
