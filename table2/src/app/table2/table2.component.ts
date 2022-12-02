import { Component, OnInit } from '@angular/core';
import { Table2Service } from './table2.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: Table2Service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
