import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeBackgroundColorDirective } from './directives/change-background.color/change-background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeBackgroundColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
