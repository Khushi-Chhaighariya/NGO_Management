import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finalmember } from './model/finalmember';



@Injectable({
  providedIn: 'root'
})
export class FinalmemberService {
  private baseUrl="http://localhost:8080/";
   // http://localhost:8080/member/
  constructor(private _http:HttpClient) { }
  public addFinalMember(finalmemberRecord:Finalmember):Observable<Finalmember>
{
 return this._http.post<Finalmember>(`${this.baseUrl}finalmember/`, finalmemberRecord);
}

public getAllFinalMembers():Observable<Finalmember[]>
{
  return this._http.get<Finalmember[]>(`${this.baseUrl}finalmember/`);
}

public deleteFinalMember(memberId:number)
{
//http://localhost:8080/member/2
return this._http.delete(`${this.baseUrl}finalmember/${memberId}`);
}
public checkLogin(con1:string,fulname1:string):Observable<Finalmember>
{
  let httpParams = new HttpParams();
  httpParams=httpParams.append("con",con1);
  httpParams=httpParams.append("fulname",fulname1);

return this._http.get<Finalmember>(`${this.baseUrl}finalmember/checkLogin`, {params:httpParams});
//console.log(this._http.get<Finalmember>(`${this.baseUrl}finalmember/checkLogin`, {params:httpParams}));
}
public getFinalMemberById(memberId:number)
{
//http://localhost:8080/member/2
return this._http.get(`${this.baseUrl}finalmember/${memberId}`);
}

}

