import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table2Component } from './table2/table2.component';
import { Table2Service } from './table2/table2.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [
    Table2Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
