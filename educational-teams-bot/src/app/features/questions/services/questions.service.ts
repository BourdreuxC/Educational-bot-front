import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/classes/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  /**
   * Base URL of the API.
   */
  private apiBaseUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * Initializes a new instance of the QuestionService class.
   * @param httpClient HttpClient to use in this service.
   */
  constructor(private httpClient: HttpClient) {
    this.apiBaseUrl = environment.apiEndpoint;
  }

  /**
   * Request the API to get the list of questions.
   * @returns An Observable containing an array of questions.
   */
  getQuestions(pageEvent?: PageEvent): Observable<Pagination> {
    if (pageEvent != undefined) {
      if (pageEvent.pageSize != undefined) {
        let url =
          this.apiBaseUrl +
          '/questions?PageSize=' +
          pageEvent.pageSize +
          '&PageNumber=' +
          (pageEvent.pageIndex + 1);

        return this.httpClient.get<Pagination>(url, this.httpOptions);
      } else {
        let url =
          this.apiBaseUrl +
          '/questions?' +
          '&PageNumber=' +
          (pageEvent.pageIndex + 1);

        return this.httpClient.get<Pagination>(url, this.httpOptions);
      }
    } else {
      return this.httpClient.get<Pagination>(
        this.apiBaseUrl + '/questions',
        this.httpOptions
      );
    }
  }
}
