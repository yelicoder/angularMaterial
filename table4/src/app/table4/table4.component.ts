import { Component, OnInit } from '@angular/core';
import { Table4Service } from './table4.service';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.css']
})
export class Table4Component implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;
  
  constructor(private service: Table4Service) { }

  ngOnInit(): void {
    this.dataSource = this.service.getData();
  }

}
