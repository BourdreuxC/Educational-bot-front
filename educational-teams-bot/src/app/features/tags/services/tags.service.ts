import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/classes/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

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
upsertVariant(variant:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  

  console.log(variant);

  //return this.http.post('http://localhost:5025/api/Tags/EditTagVariant', variant , httpOptions)  
}

autoDelete(object:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  return this.http.post('http://localhost:5025/api/'+object.constructor.name+'s', object , httpOptions)
 // return this.http.delete('http://localhost:5025/api/'+type+'s'+'/'+object['id'])  
}
     /**
    * Request the API to get a list of a type.
    * @returns An Observable containing an array.
    */
      getTags():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    
    return this.http.get<any>('http://localhost:5025/api/tags', httpOptions)
}
}