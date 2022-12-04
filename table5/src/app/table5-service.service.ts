import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

export interface accountDisplay {
  rowHeader: string,
  account1: string,
  account2: string
}

export interface accountInfo {
  accountNumber: string,
  accountShortName: string,
  accountDescription: string,
  SSN: string
}

@Injectable({
  providedIn: 'root'
})
export class Table5Service {

  SERVER_URL: string = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  public getAccounts(): Observable<accountInfo[]> {
    return this.httpClient.get<accountInfo[]>(this.SERVER_URL + 'accocunts');
  }

  public getAccount(accountNumber: string): Observable<accountInfo> {
    return this.httpClient.get<accountInfo>(`${this.SERVER_URL + 'accounts'}/${accountNumber}`);
  }

  getData(): Observable <accountDisplay[]> {

    const allOperations = forkJoin([this.getAccount('123456'), this.getAccount('123466')]);

    const params =  new Observable <accountDisplay[]> (function subscribe (observer){
        allOperations.subscribe(([account1, account2]) => {
            const data: accountDisplay[] = [];
            data.push({rowHeader: 'Acct #', account1: account1.accountNumber, account2: account2.accountNumber});
            data.push({rowHeader: 'Acct Short Name', account1: account1.accountShortName, account2: account2.accountShortName});
            data.push({rowHeader: 'Acct description', account1: account1.accountDescription, account2: account2.accountDescription});
            data.push({rowHeader: 'SSN/TIN', account1: account1.SSN, account2: account2.SSN});
            observer.next(data);
            observer.complete();        
        });
    });
    return params;
  }     
}
