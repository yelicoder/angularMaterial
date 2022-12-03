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

export class Table3Service {
    getData() {
        const params: accountDisplay[] = [];
        params.push({rowHeader: 'Acct #', account1: ACCOUNT_1.accountNumber, account2: ACCOUNT_2.accountNumber});
        params.push({rowHeader: 'Acct Short Name', account1: ACCOUNT_1.accountShortName, account2: ACCOUNT_2.accountShortName});
        params.push({rowHeader: 'Acct description', account1: ACCOUNT_1.accountDescription, account2: ACCOUNT_2.accountDescription});
        params.push({rowHeader: 'SSN/TIN', account1: ACCOUNT_1.SSN, account2: ACCOUNT_2.SSN})
        return params;  
    } 
}