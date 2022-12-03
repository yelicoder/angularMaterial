import { Component, OnInit } from '@angular/core';
import { Table3Service } from './table3.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {
  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: Table3Service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
