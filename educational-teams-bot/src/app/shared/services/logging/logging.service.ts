import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  /**
   * Application insights to use in this service.
   */
  private appInsights: ApplicationInsights;

  /**
   * Initializes a new instance of the LoggingService class.
   */
  constructor(private router: Router) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.applicationInsights.instrumentationKey,
        enableAutoRouteTracking: true, // option to log all route changes
      },
    });

    this.appInsights.loadAppInsights();
  }

  /**
   * Logs page.
   * @param name Name of the page.
   * @param url URL of the page.
   */
  logPageView(name?: string, url?: string) {
    this.appInsights.trackPageView({
      name: name,
      uri: url,
    });
  }

  /**
   * Logs an event.
   * @param name Name of the event.
   * @param properties Additional properties of the event.
   */
  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  /**
   * Logs a metric.
   * @param name Name of the metric.
   * @param average Average of the metric.
   * @param properties Additional properties of the metric.
   */
  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  /**
   * Logs an exception.
   * @param exception Exception to log.
   * @param severityLevel Severity of the exception.
   */
  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({
      exception: exception,
      severityLevel: severityLevel,
    });
  }

  /**
   * Logs a trace.
   * @param message Trace message.
   * @param properties Trace properties.
   */
  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
