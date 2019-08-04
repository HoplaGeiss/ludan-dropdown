import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ludan-dropdown',
  styleUrls: ['dropdown.component.scss'],
  template: `
    <div class="selected-item" [ngClass]="{ active: dropdownActive }">
      <div [hidden]="!selectedItem">{{ selectedItem }}</div>
      <div [hidden]="selectedItem">Select an item</div>
      <i class="material-icons" (click)="toggleDropdown()"
        >keyboard_arrow_down</i
      >

      <div class="dropdown" [hidden]="!dropdownActive">
        <div
          *ngFor="
            let item of items | dropdownPipe: selectedItem;
            let last = last
          "
          class="item"
          [ngClass]="{ last: last }"
          (click)="selectItem(item)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  `
})
export class DropdownComponent {
  @Input() items: any[];
  @Input() selectedItem: any;
  @Input() dropdownActive = true;
  @Output() selectEvent = new EventEmitter();

  toggleDropdown = () => {
    this.dropdownActive = !this.dropdownActive;
  }

  selectItem = (item: any) => {
    this.dropdownActive = false;
    this.selectEvent.emit(item);
  }
}
