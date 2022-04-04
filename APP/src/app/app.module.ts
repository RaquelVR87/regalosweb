import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { NewGiftFormComponent } from './new-gift-form/new-gift-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftListComponent,
    NewGiftFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
