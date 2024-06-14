import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './model/member';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl="http://localhost:8080/";
  addFinalMember: any;
   // http://localhost:8080/member/
  constructor(private _http:HttpClient) { }
  //addmember are record all values and send to the spring boot
  public addMember(memberRecord:Member):Observable<Member>
{
 return this._http.post<Member>(`${this.baseUrl}member/`, memberRecord);
}

//POST http://localhost:8080/member/1,khushi,789877899,sagar,emp,reason
//these all data are included database
//insert into member(name,contact,address,employement,reason) VALUES(1,"khushi","789877899","sagar","emp","reason")

public getAllMembers():Observable<Member[]>
{
  return this._http.get<Member[]>(`${this.baseUrl}member/`);
}

//Get http://localhost:8080/member/
//get value are show on the database
public deleteMember(memberId:number)
{
//http://localhost:8080/member/2
return this._http.delete(`${this.baseUrl}member/${memberId}`);
}

// Get "http://localhost:8080/member/4
//Delete from member where id=4;



public getMemberById(memberId:number)
{
//http://localhost:8080/member/2
return this._http.get(`${this.baseUrl}member/${memberId}`);
}

}

