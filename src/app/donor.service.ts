import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from './model/donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private baseUrl="http://localhost:8080/";
  // http://localhost:8080/student/
  constructor(private _http:HttpClient) { }
  public addDonor(donorRecord:Donor):Observable<Donor>
{
 return this._http.post<Donor>(`${this.baseUrl}donor/`, donorRecord);
}
public getAllDonors():Observable<Donor[]>
{
  return this._http.get<Donor[]>(`${this.baseUrl}donor/`);
}

public deleteDonor(donorId:number)
{
//http://localhost:8080/donor/2
return this._http.delete(`${this.baseUrl}donor/${donorId}`);
}
public getDonorById(donorId:number)
{
//http://localhost:8080/donor/2
return this._http.get(`${this.baseUrl}donor/${donorId}`);
}
}
