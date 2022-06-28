import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
constructor(private http: HttpClient) {
  this.apiBaseUrl = environment.apiEndpoint;
 }

   /**
    * Request the API to edit an object.
    * @returns nothing ?
    */
editReaction(reaction:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

 return this.http.put(this.apiBaseUrl+'/api/reactions', reaction , httpOptions)  
}
     /**
    * Request the API to get a list of a type.
    * @returns An Observable containing an array.
    */
   getReaction():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.get<any>(this.apiBaseUrl+'/api/reactions', httpOptions)
}
}
