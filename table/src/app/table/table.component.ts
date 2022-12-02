import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  rowHeader: string;
  receivingAccount: string;
  deliveringAccount: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'account1', 'account2'];
  dataSource: any;

  getData() {
    const params = [];
    params.push({rowHeader: 'Acct #', account1: '123456', account2: '123466'});
    params.push({rowHeader: 'Acct Short Name', account1: 'MyAccount', account2: 'YourAccount'});
    params.push({rowHeader: 'Acct description', account1:'45 stone ln, edison, NJ', account2: '78 hoover way, edison, nj'});
    params.push({rowHeader: 'SSN/TIN', account1:'33344455', account2: '000785690'})
    return params;    
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.getData();
  }

}
