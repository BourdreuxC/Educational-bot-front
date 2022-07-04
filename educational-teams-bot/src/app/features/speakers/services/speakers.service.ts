import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/classes/pagination';
import { Speaker } from 'src/app/shared/classes/speaker';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
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
   * Request the API to upsert an object.
   * @returns nothing ?
   */
  upsertSpeaker(speaker: any) {
    return this.httpClient.post(
      this.apiBaseUrl + '/speakers',
      speaker,
      this.httpOptions
    );
  }

  deleteSpeaker(speaker: Speaker) {
    return this.httpClient.delete(
      this.apiBaseUrl + '/speakers?id=' + speaker.id,
      this.httpOptions
    );
  }
  /**
   * Request the API to get a list of a type.
   * @returns An Observable containing an array.
   */
  getSpeakers(pageEvent?: PageEvent): Observable<Pagination> {
    if (pageEvent != undefined) {
      if (pageEvent.pageSize != undefined) {
        let url =
          this.apiBaseUrl +
          '/speakers?PageSize=' +
          pageEvent.pageSize +
          '&PageNumber=' +
          (pageEvent.pageIndex + 1);

        return this.httpClient.get<Pagination>(url, this.httpOptions);
      } else {
        let url =
          this.apiBaseUrl +
          '/speakers?' +
          '&PageNumber=' +
          (pageEvent.pageIndex + 1);

        return this.httpClient.get<Pagination>(url, this.httpOptions);
      }
    } else {
      return this.httpClient.get<Pagination>(
        this.apiBaseUrl + '/speakers',
        this.httpOptions
      );
    }
  }
}
