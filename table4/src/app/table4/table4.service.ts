import { delay, forkJoin, Observable, of } from "rxjs";

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

const ACCOUNT_1: accountInfo = {
    accountNumber: '123456',
    accountShortName: 'MyAccount',
    accountDescription: '45 stone ln, edison, NJ',
    SSN: '33344455',
}

const ACCOUNT_2: accountInfo = {
    accountNumber: '123466',
    accountShortName: 'YourAccount',
    accountDescription: '78 hoover way, edison, nj',
    SSN: '000785690',
}

export class Table4Service {

    getAccount1(): Observable <accountInfo> {
        
        return of(ACCOUNT_1);
    }

    getAccount2(): Observable <accountInfo> {
        return of(ACCOUNT_2).pipe(delay(2000));
    }
    getData(): Observable <accountDisplay[]> {

        const allOperations = forkJoin([this.getAccount1(), this.getAccount2()]);

        const params =  new Observable <accountDisplay[]> (function subscribe (observer){
            allOperations.subscribe(([account1, account2]) => {
                const data: accountDisplay[] = [];
                data.push({rowHeader: 'Acct #', account1: ACCOUNT_1.accountNumber, account2: ACCOUNT_2.accountNumber});
                data.push({rowHeader: 'Acct Short Name', account1: ACCOUNT_1.accountShortName, account2: ACCOUNT_2.accountShortName});
                data.push({rowHeader: 'Acct description', account1: ACCOUNT_1.accountDescription, account2: ACCOUNT_2.accountDescription});
                data.push({rowHeader: 'SSN/TIN', account1: ACCOUNT_1.SSN, account2: ACCOUNT_2.SSN});
                observer.next(data);
                observer.complete();        
            });
        });
        return params;
    }      
}