import { DropdownModule } from './../../projects/ngx-ludan-dropdown/src/lib/dropdown.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, DropdownModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
