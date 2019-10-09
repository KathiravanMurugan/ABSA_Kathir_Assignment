import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PhoneBookEntriesComponent } from './PhoneBookEntries/phone-book-entries/phone-book-entries.component';
import { PhoneBookEntryComponent } from './PhoneBookEntries/phone-book-entry/phone-book-entry.component';
import { PhoneBookEntryListComponent } from './PhoneBookEntries/phone-book-entry-list/phone-book-entry-list.component';
import { PhoneBookEntryService } from './shared/phone-book-entry.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookEntriesComponent,
    PhoneBookEntryComponent,
    PhoneBookEntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PhoneBookEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
