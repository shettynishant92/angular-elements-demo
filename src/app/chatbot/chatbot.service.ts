import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  readonly PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getApiData(sessionId: string): Observable<any> {
    console.log('The Session ID is ' + sessionId);
    return this.http.get(this.PLACEHOLDER_URL);
  }
}
