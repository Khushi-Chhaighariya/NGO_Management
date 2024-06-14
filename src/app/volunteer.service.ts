import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './model/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private baseUrl="http://localhost:8080/";
  // http://localhost:8080/student/
  constructor(private _http:HttpClient) { }
  public addVolunteer(volunteerRecord:Volunteer):Observable<Volunteer>
{
 return this._http.post<Volunteer>(`${this.baseUrl}volunteer/`, volunteerRecord);
}
public getAllVolunteers():Observable<Volunteer[]>
{
  return this._http.get<Volunteer[]>(`${this.baseUrl}volunteer/`);
}

public deleteVolunteer(volunteerId:number)
{
//http://localhost:8080/volunteer/2
return this._http.delete(`${this.baseUrl}volunteer/${volunteerId}`);
}

}

