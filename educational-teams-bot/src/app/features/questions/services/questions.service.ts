import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getQuestions(): Observable<Pagination> {
    return this.httpClient.get<Pagination>(`${this.apiBaseUrl}/questions`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
