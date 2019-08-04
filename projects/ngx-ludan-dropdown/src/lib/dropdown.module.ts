import { DropdownPipe } from './dropdown.pipe';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownComponent, DropdownPipe],
  exports: [DropdownComponent]
})
export class DropdownModule {}
