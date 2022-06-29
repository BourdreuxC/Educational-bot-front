import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/classes/pagination';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  /**
 * Base URL of the API.
 */
   private apiBaseUrl : string;

   /**
    * Initializes a new instance of the ReactionService class.
    * @param httpClient HttpClient to use in this service.
    */
constructor(private httpClient: HttpClient) {
  this.apiBaseUrl = environment.apiEndpoint;
 }

   /**
    * Request the API to edit an object.
    * @returns nothing ?
    */
editReaction(body:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

return this.httpClient.post(this.apiBaseUrl+'/reactions', body , httpOptions)
}
  /**
   * Request the API to get the list of reactions.
   * @returns An Observable containing an array of reactions.
   */
   getReactions(): Observable<Pagination> {
    return this.httpClient.get<Pagination>(`${this.apiBaseUrl}/reactions`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
