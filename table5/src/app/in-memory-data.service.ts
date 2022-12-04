import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {

    let accounts = [
      { id: '123456', accountShortName: 'MyAccount', accountDescription: '45 stone ln, edison, NJ', SSN: '33344455'},
      { id: '123466', accountShortName: 'YourAccount', accountDescription: '78 hoover way, edison, nj',SSN: '000785690'}
    ]
    return {accounts};
  }
}
