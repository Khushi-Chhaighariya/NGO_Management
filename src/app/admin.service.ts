import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './model/member';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="https://localhost:8080/";
   // http://localhost:8080/student/
  constructor(private _http:HttpClient) { }
  public addMember(memberRecord:Member):Observable<Member>
{
 return this._http.post<Member>(`${this.baseUrl}member/`, memberRecord);
}
}
