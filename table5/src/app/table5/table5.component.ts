import { Component, OnInit } from '@angular/core';
import { Table5Service } from '../table5-service.service';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.css']
})
export class Table5Component implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: Table5Service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
