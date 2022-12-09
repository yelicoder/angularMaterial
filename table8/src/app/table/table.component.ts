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

    let account1Description = 'Guture technologies       45 stone ln         radio city PA 30405';
    let account2Descrition = 'future nations      78 hoover dam     middletown NJ 05530';

    params.push({rowHeader: 'Acct #', account1: '123456', account2: '123466'});
    params.push({rowHeader: 'Acct Short Name', account1: 'MyAccount', account2: 'YourAccount'});
    params.push({rowHeader: 'Acct description', account1: this.formatAddress(account1Description), account2: '78 hoover way, edison, nj'});
    params.push({rowHeader: 'SSN/TIN', account1:'33344455', account2: '000785690'})
    return params;    
  }

  private formatAddress(address: string) {

    let lines = address.split('   ');

    let newAddress= '';

    for (let i=0; i<lines.length; i++) {
      if (lines[i].length != 0) {
        newAddress = newAddress + ' ' + lines[i].trim() + '\n';
      }
    }
    
    newAddress.trim();
    return newAddress;
   }

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.getData();
  }

}
