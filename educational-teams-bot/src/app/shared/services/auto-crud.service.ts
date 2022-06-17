import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutoCrudService {
  /**
   * Base URL of the API.
   */
  private apiBaseUrl: string;

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
  autoUpsert(object: string, type: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(
      'http://localhost:5025/api/' + type + 's',
      object,
      httpOptions
    );
  }
  /**
   * Request the API to get a list of a type.
   * @returns An Observable containing an array.
   */
  fetchList(type: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get('http://localhost:5025/api/' + type, httpOptions);
    //return this.http.get("http://localhost:"+type+'s');
  }
}
