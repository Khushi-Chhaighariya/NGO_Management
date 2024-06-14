import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FinalmemberService } from '../finalmember.service';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css'],
  preserveWhitespaces: true,
})
export class MemberLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _finalmemberService: FinalmemberService, private _router: Router) { 
    this.loginForm = this._formBuilder.group(
      {
        contact: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10)])],
        fullname: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      }
    );
  }
  
  
  
  
  ngOnInit(): void {}



loginCheck()
  {
    if(this.loginForm.valid)
    {

      Swal.fire({
        title: 'Do you want submit the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {
          var contact = this.loginForm.get('contact')?.value;
          var fullname = this.loginForm.get('fullname')?.value;
          console.log(this.loginForm.value);
    
    
          this._finalmemberService.checkLogin(contact, fullname).subscribe((response) => {
            if (response != null) {
              //alert("user");
              console.log(response);
              //this._router.navigate(['member',response.id]);
              Swal.fire('Login Successfully!', '', 'success')
              this._router.navigate(['/achievers',response.id]);
            }},
            (error=>
              
              {
                console.log.apply(error);
              })
            );

         
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    //console.log(this.memberReg.value);

   
    }
    //console.log(this.memberReg.valid);
  }



}