import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService extends ErrorHandler {
  /**
   * Initializes a new instance of the ErrorHandlingService class.
   * @param loggingService Logging service to use.
   */
  constructor(private loggingService: LoggingService) {
    super();
  }

  /**
   * Handles an error.
   * @param error Error to handle.
   */
  override handleError(error: Error) {
    this.loggingService.logException(error);
  }
}
