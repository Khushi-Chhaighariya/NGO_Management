import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';
import { AdminLogin } from '../model/admin-login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  preserveWhitespaces:true,
})
export class AdminLoginComponent implements OnInit {
 loginForm:FormGroup;
 constructor(private _formBuilder:FormBuilder,private _adminLoginService:AdminLoginService,private _router:Router){}
 ngOnInit(): void {
     this.loginForm = this._formBuilder.group(
      {
        admin_email:['',Validators.compose([Validators.required,Validators.email])],
        admin_password:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
      }
     );
 }
loginCheck()
{
  if(this.loginForm.valid)
  {
  

  var email=this.loginForm.get('admin_email')?.value;
  var password=this.loginForm.get('admin_password')?.value;
  this._adminLoginService.checkLogin(email,password).subscribe(Response=>{
if ((email=='admin@gmail.com') && (password=='admin'))
{
  alert("Login Sucessfully");
this._router.navigate(['admin']);
}
else{
  alert("Login falied");
}
  },
  (error=>
    {
      console.log(error);
    })
  )
  }
  console.log(this.loginForm.value);
}
}
