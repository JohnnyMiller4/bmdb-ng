import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Cast } from '../model/cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  url: string = "http://localhost:8080/cast/"

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  //add save() method
  save(cast: Cast): Observable<JsonResponse> {
    return this.http.post(this.url, cast) as Observable<JsonResponse>;
  }

  //add get() method
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
}
