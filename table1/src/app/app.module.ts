import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table1Component } from './table1/table1.component';
import { MatTableModule } from '@angular/material/table'
import { Table1Service } from './table1/table1.service';

@NgModule({
  declarations: [
    AppComponent,
    Table1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [
    Table1Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
