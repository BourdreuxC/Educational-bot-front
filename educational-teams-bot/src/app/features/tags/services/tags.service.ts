import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
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
   * Request the API to upsert a Variant.
   * @returns nothing ?
   */
  upsertVariant(variant: any) {
    console.log(variant);

    return this.http.post(
      this.apiBaseUrl + '/tags/EditTagVariant',
      variant,
      this.httpOptions
    );
  }

  /**
   * Request the API to delete a Tag.
   * @returns nothing ?
   */
  deleteTags(object: any) {
    return this.http.delete(
      this.apiBaseUrl + '/tags' + object,
      this.httpOptions
    );
  }
  /**
   * Request the API to get a list of a type.
   * @returns An Observable containing an array.
   */
  getTags(): Observable<any> {
    return this.http.get<any>(this.apiBaseUrl + '/tags', this.httpOptions);
  }
}
