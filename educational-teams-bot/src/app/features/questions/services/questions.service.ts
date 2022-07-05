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
  getQuestions(pageEventQuestion?: PageEvent): Observable<Pagination> {
    if (pageEventQuestion != undefined) {
      if (pageEventQuestion.pageSize != undefined) {
        let url =
          this.apiBaseUrl +
          '/questions?PageSize=' +
          pageEventQuestion.pageSize +
          '&PageNumber=' +
          (pageEventQuestion.pageIndex + 1);

        return this.httpClient.get<Pagination>(url, this.httpOptions);
      } else {
        let urlQuestion =
          this.apiBaseUrl +
          '/questions?' +
          '&PageNumber=' +
          (pageEventQuestion.pageIndex + 1);

        return this.httpClient.get<Pagination>(urlQuestion, this.httpOptions);
      }
    } else {
      return this.httpClient.get<Pagination>(
        this.apiBaseUrl + '/questions',
        this.httpOptions
      );
    }
  }
}
