import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './model/admin-login';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private baseUrl="http://localhost:8080/";

 constructor(private _http:HttpClient) { }
 
 public checkLogin(email1:string,password1:string):Observable<AdminLogin>
{
  let httpParams = new HttpParams();
  httpParams=httpParams.append('email',email1);
  httpParams=httpParams.append('password',password1);

return this._http.get<AdminLogin>(`${this.baseUrl}admin/checkLogin`, {params:httpParams});
}

}
