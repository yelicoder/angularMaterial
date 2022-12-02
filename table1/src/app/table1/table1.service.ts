import { Observable, from } from "rxjs";


export class Table1Service {
    getData() {
        const params = [];
        params.push({rowHeader: 'Acct #', account1: '123456', account2: '123466'});
        params.push({rowHeader: 'Acct Short Name', account1: 'MyAccount', account2: 'YourAccount'});
        params.push({rowHeader: 'Acct description', account1:'45 stone ln, edison, NJ', account2: '78 hoover way, edison, nj'});
        params.push({rowHeader: 'SSN/TIN', account1:'33344455', account2: '000785690'})
        return params;  
    }
    
}