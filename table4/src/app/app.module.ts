import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table4Component } from './table4/table4.component';
import { MatTableModule } from '@angular/material/table'
import { Table4Service } from './table4/table4.service';

@NgModule({
  declarations: [
    AppComponent,
    Table4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [
    Table4Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
