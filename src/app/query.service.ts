import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from './model/query';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private baseUrl="http://localhost:8080/";
  
   // http://localhost:8080/query/
  constructor(private _http:HttpClient) { }
  public addQuery(queryRecord:Query):Observable<Query>
{
 return this._http.post<Query>(`${this.baseUrl}query/`, queryRecord);
}

public getAllQuerys():Observable<Query[]>
{
  return this._http.get<Query[]>(`${this.baseUrl}query/`);
}

public deleteQuery(queryId:number)
{
//http://localhost:8080/query/2
return this._http.delete(`${this.baseUrl}query/${queryId}`);
}
public getQueryById(queryId:number)
{
//http://localhost:8080/query/2
return this._http.get(`${this.baseUrl}query/${queryId}`);
}

}

