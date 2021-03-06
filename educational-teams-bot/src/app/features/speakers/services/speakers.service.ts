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
  getSpeakers(pageEventSpeaker?: PageEvent): Observable<Pagination> {
    if (pageEventSpeaker != undefined) {
      if (pageEventSpeaker.pageSize != undefined) {
        let urlSpeaker =
          this.apiBaseUrl +
          '/speakers?PageSize=' +
          pageEventSpeaker.pageSize +
          '&PageNumber=' +
          (pageEventSpeaker.pageIndex + 1);

        return this.httpClient.get<Pagination>(urlSpeaker, this.httpOptions);
      } else {
        let urlSpeaker =
          this.apiBaseUrl +
          '/speakers?' +
          '&PageNumber=' +
          (pageEventSpeaker.pageIndex + 1);

        return this.httpClient.get<Pagination>(urlSpeaker, this.httpOptions);
      }
    } else {
      return this.httpClient.get<Pagination>(
        this.apiBaseUrl + '/speakers',
        this.httpOptions
      );
    }
  }
}
