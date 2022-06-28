import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  /**
 * Base URL of the API.
 */
   private apiBaseUrl : string;

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
upsertSpeaker(speaker:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

 return this.http.post(this.apiBaseUrl+'/api/speakers', speaker , httpOptions)  
}

deleteSpeaker(speaker:Speaker){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  return this.http.delete(this.apiBaseUrl+'/api/speakers/'+speaker.id , httpOptions, )
}
     /**
    * Request the API to get a list of a type.
    * @returns An Observable containing an array.
    */
   getSpeakers():Observable<Speaker[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.get<Array<Speaker>>(this.apiBaseUrl+'/api/speakers', httpOptions)
}
}
