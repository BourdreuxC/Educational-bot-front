import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from 'src/app/shared/classes/reaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReactionsService {
  /**
   * Base URL of the API.
   */
  private apiBaseUrl: string;

  /**
   * Initializes a new instance of the ReactionService class.
   * @param httpClient HttpClient to use in this service.
   */
  constructor(private httpClient: HttpClient) {
    this.apiBaseUrl = environment.apiEndpoint;
  }

  /**
   * Request the API to get the list of reactions.
   * @returns An Observable containing an array of reactions.
   */
  getReactions(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseUrl}/reactions`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
