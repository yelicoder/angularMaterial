import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, throwError } from 'rxjs';
import * as _ from 'lodash';

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

// the following is used as the collection to set up postman mockserver
const ACCOUNT_1 = 
  {
    "errorCode": 0,
    "errorDescription": "SUCCESS",
    "errorMessage": null,
    "response": {
      "data": [
        {
          "accountNumber": "123456",
          "accountShortName": "MyAccount",
          "ssn": "12345678"
        },
        {
          "name": null,
          "address": "18 david ln, Litte Ferry, PA 09823"
        }
      ]
    }
  }

@Injectable({
  providedIn: 'root'
})
export class TableService {

  SERVER_URL: string = "https://a524de66-0519-47bc-8c92-6a2199e43675.mock.pstmn.io/accounts/";

  constructor(private httpClient: HttpClient) { }

  public getAccounts(): Observable<accountInfo[]> {
    return this.httpClient.get<accountInfo[]>(this.SERVER_URL);
  }

  public getAccount(accountNumber: string): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + accountNumber)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getData(): Observable <accountDisplay[]> {

    const allOperations = forkJoin([this.getAccount('123456'), this.getAccount('123466')]);

    const params =  new Observable <accountDisplay[]> (function subscribe (observer){
        allOperations.subscribe(([account1, account2]) => {
            const data: accountDisplay[] = [];
            data.push({rowHeader: 'Acct #', account1: _.get(account1, 'response.data[0].accountNumber'), account2: _.get(account2, 'response.data[0].accountNumber')});
            data.push({rowHeader: 'Acct Short Name', account1: _.get(account1, 'response.data[0].accountShortName'), account2: _.get(account2, 'response.data[0].accountShortName')});
            data.push({rowHeader: 'Acct description', account1: _.get(account1, 'response.data[1].accountDescription'), account2: _.get(account2, 'response.data[1].accountDescription')});
            data.push({rowHeader: 'SSN/TIN', account1: _.get(account1, 'response.data[0].ssn'), account2: _.get(account1, 'response.data[0].ssn')});
            observer.next(data);
            observer.complete();        
        });
    });
    return params;
  }     
}
