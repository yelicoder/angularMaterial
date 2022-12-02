import { Component, OnInit } from '@angular/core';
import { Table1Service } from './table1.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: Table1Service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
