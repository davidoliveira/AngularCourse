import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  log(error) {
    console.log('Logger', error);
  }
}

@Injectable()
export class MyErrorHandler extends ErrorHandler {

  constructor(private logger: LoggerService) {
    super();
  }

  handleError(error) {
    super.handleError(error);
    throw(error);
    // We rethrow exceptions, so operations like 'bootstrap' will result in an error
    // when an error happens. If we do not rethrow, bootstrap will always succeed.
  }
}
