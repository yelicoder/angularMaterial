# angularMaterial

## How to run the code
1. checkout the code
2. nvm use 16.16.0
3. npm i
4. ng serve --open

## To do
1. httpInteceptor: https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/
https://www.positronx.io/angular-error-handling-tutorial-with-examples/
https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
https://dev.to/buildmotion/angular-errorhandler-to-handle-or-not-to-handle-1e7l
https://pkief.medium.com/global-error-handling-in-angular-ea395ce174b1

2. handle error

## Projects
1. table: get data from component
2. table1: get data from service
3. table2: get array of object data from service
4. table3: get array of object from two account information
5. table4: get array of object as observable. The array of objects are created by two observables.
6. table5: get array of object from http response using in memory service
7. table6: get array of object from real http response JSON
8. table7: use Postman mock server to simulate 200 response with error code and 404 response
9. table8: display three lines in a MAT table cell. split a string to display three lines in material table. Using javascript string function and css
10. table9: catch 404 error and handle it
11. table10: catch 404 error and handle it and in the mean time catch the error in 200 response and handle it. In unit testing, use the following to expect an error is thrown
```
 expect( function() {service.checkError(errorResponse)}).toThrowError("Invalid input");
```
https://angular.io/guide/http#testing-http-requests


## Mock Https response
### 1. Use angular angular-in-memory-web-api
1.1 npm install angular-in-memory-web-api --save-dev
1.2 create a service (for example DataService) implementing InMemoryDbService
1.3 implement the createDB method in the service
1.4. the createDB method returns an array of objects (for example accounts). It has to have an id field
1.5  import the data service in app.module.ts
```
@NgModule({
  ...
  imports: [
    ...
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  ...
})
```
1.6. when making http call in the service, the url will always be "api/accounts" or similar

This does not require any additional tools and can quickly get the application up and running with a set of data. 

The limitation:
1. Should always have an id. This means you can not use any response JSON that you want to use as in a real service.
2. It can not simulate error response

Reference: 
1. https://blog.logrocket.com/angular-in-memory-web-api-tutorial-mocking-crud-apis-in-angular/
2. https://angular.io/tutorial/toh-pt6

### Use Postman mock server

You can simimulat any response and http status code

Warning: make sure the angular-in-memory-web-api dependency is removed. Otherwise the http call will be intecepted and throws 404 error

Reference:
1. https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/

### Use https://httpstat.us/
This approach can simulate any of the http error code

## Gotcha
1. "webRoot" of Visual Souce Code's launch.json should be modified when changing projects. Otherwise the breakpoint could not be set
