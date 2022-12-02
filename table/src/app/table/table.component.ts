import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  receivingAccount: string;
  rowHeader: string;
  deliveringAccount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {rowHeader: 'Acct #', receivingAccount: '123456', deliveringAccount: '123466'},
  {rowHeader: 'Acct Title', receivingAccount: 'MyAccount', deliveringAccount: 'YourAccount'},
  {rowHeader: 'Acct Reg', receivingAccount:'45 stone ln, edison, NJ', deliveringAccount: '78 hoover way, edison, nj'},
  {rowHeader: 'SSN/TIN', receivingAccount:'33344455', deliveringAccount: '000785690'},
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['rowHeader', 'receivingAccount', 'deliveringAccount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
