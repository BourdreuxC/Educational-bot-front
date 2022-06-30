import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/classes/pagination';
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
  constructor(private httpClient: HttpClient) {
    this.apiBaseUrl = environment.apiEndpoint;
  }

  /**
   * Request the API to upsert a Variant.
   * @returns updated tag
   */
  upsertVariant(variant: any) {
    console.log(variant);

    return this.httpClient.put(
      this.apiBaseUrl + '/tags/EditTagVariant',
      variant,
      this.httpOptions
    );
  }

  /**
   * Request the API to upsert a Variant.
   * @returns new tag
   */
  createTag(tag: any) {
    console.log(tag);

    return this.httpClient.post(
      this.apiBaseUrl + '/tags/',
      tag,
      this.httpOptions
    );
  }

  /**
   * Request the API to delete a Tag.
   * @returns deleted tag
   */
  deleteTag(id: string) {
    return this.httpClient.delete(
      this.apiBaseUrl + '/tags?id=' + id,
      this.httpOptions
    );
  }
  /**
   * Request the API to get a list of a type.
   * @returns An Observable containing an array.
   */
  getTags(): Observable<Pagination> {
    return this.httpClient.get<Pagination>(
      this.apiBaseUrl + '/tags',
      this.httpOptions
    );
  }
}
