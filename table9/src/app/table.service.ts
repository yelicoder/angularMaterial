import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, tap, throwError } from 'rxjs';
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

const ErrorResponse =
{
  "errorCode": 1,
  "errorDescription": "Someproblem",
  "errorMessage": "There are something wrong"
}

const AUTH_ERROR =
{
  "Error": "SomeError",
  "Message": "There is some error",
  "errorcode": "SomeError",
  "errormessage": "some error message"
}


@Injectable({
  providedIn: 'root'
})
export class TableService {

  SERVER_URL: string = "https://4cb388da-3e5f-4c9a-b37b-36eb9819d401.mock.pstmn.io/account404/";

  constructor(private httpClient: HttpClient) { }

  public getAccounts(): Observable<accountInfo[]> {
    return this.httpClient.get<accountInfo[]>(this.SERVER_URL);
  }

  public getAccount(accountNumber: string): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + accountNumber)
      .pipe(
        map(res => {
          this.checkError(res);
          return _.get(res, `response`);
        }),
        catchError(this.handleError<any>(`getAccount accountNumber = ${accountNumber}`))
      );
  }

  public checkError(response: any) {
    if (response && !_.isNil(response.errorCode) && parseInt(response.errorCode) != 0) {
      throw new Error(response.errorMessage);
    }
  }

  public handleError<T>(operation = `operation`) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error.error);
      if (error.error instanceof Event) {
        throw error.error;
      }
      const message = `server returned code ${error.status} with body "${error.error}"`;
      // Return an observable with a user-facing error message.
      throw new Error(`${operation} failed: ${message}`);
    };
  }

  getData(): Observable<accountDisplay[]> {

    const allOperations = forkJoin([this.getAccount('123456'), this.getAccount('123466')]);

    const params = new Observable<accountDisplay[]>(function subscribe(observer) {
      allOperations.subscribe(([account1, account2]) => {
        const data: accountDisplay[] = [];
        data.push({ rowHeader: 'Acct #', account1: _.get(account1, 'response.data[0].accountNumber'), account2: _.get(account2, 'response.data[0].accountNumber') });
        data.push({ rowHeader: 'Acct Short Name', account1: _.get(account1, 'response.data[0].accountShortName'), account2: _.get(account2, 'response.data[0].accountShortName') });
        data.push({ rowHeader: 'Acct description', account1: _.get(account1, 'response.data[1].accountDescription'), account2: _.get(account2, 'response.data[1].accountDescription') });
        data.push({ rowHeader: 'SSN/TIN', account1: _.get(account1, 'response.data[0].ssn'), account2: _.get(account1, 'response.data[0].ssn') });
        observer.next(data);
        observer.complete();
      });
    });
    return params;
  }
}
