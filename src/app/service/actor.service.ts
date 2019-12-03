import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Actor } from '../model/actor.class';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  //define URL
  url: string = "http://localhost:8080/actors/";

  //add private http: HttpClient
  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  //add save() method
  save(actor: Actor): Observable<JsonResponse> {
    return this.http.post(this.url, actor) as Observable<JsonResponse>;
  }

  //add get() method
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
}
