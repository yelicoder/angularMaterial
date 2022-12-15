import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: TableService) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
