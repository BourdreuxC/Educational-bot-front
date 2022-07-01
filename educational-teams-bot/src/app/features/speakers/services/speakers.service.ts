import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.apiEndpoint;
  }

  /**
   * Request the API to upsert an object.
   * @returns nothing ?
   */
  upsertSpeaker(speaker: any) {
    return this.http.post(
      this.apiBaseUrl + '/speakers',
      speaker,
      this.httpOptions
    );
  }

  deleteSpeaker(speaker: Speaker) {
    return this.http.delete(
      this.apiBaseUrl + '/speakers?id=' + speaker.id,
      this.httpOptions
    );
  }
  /**
   * Request the API to get a list of a type.
   * @returns An Observable containing an array.
   */
  getSpeakers(): Observable<Pagination[]> {
    return this.http.get<Array<Pagination>>(
      this.apiBaseUrl + '/speakers',
      this.httpOptions
    );
  }
}
