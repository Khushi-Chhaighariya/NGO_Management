import { Component, OnInit,Input,Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FinalmemberService } from '../finalmember.service';
import { MemberService } from '../member.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Admin } from '../model/admin';
import { DialogData } from '../admin/admin.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface Members {
  id: number;    
  fullname: string;
     contact : string;
      address: string;
      employement: string;
      reason:string;
}
@Component({
  selector: 'app-finalmember',
  templateUrl: './finalmember.component.html',
  styleUrls: ['./finalmember.component.css']
})
export class FinalmemberComponent implements OnInit {
 // @Input() childPosts:any[]=[];
 
 id:number;
member:any;
memberReg:FormGroup;
  constructor(private _memberService:MemberService,private _formBuilder:FormBuilder,private router:Router,
    private _finalmemberService:FinalmemberService,
    private _activatedRoute:ActivatedRoute,
   
    ) {
      this.memberReg=_formBuilder.group(
        {
          id: [0],    
      fullname: ['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])],
           contact : ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
            address:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(30)])],
            employement: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
            reason:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
      
        }
      )
    }

  ngOnInit(): void {
  
  this.id=this._activatedRoute.snapshot.params['id'];
  this._memberService.getMemberById(this.id).subscribe(response=>
  {
this.member=response;
this.memberReg=this._formBuilder.group(
  {
    id: [this.member.id], 
    fullname: [this.member.fullname,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])],
             contact : [this.member.contact,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
              address:[this.member.address,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(30)])],
              employement: [this.member.employement,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
              reason:[this.member.reason,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
      
        }
);
},
(error=>{
  console.log(error);
})
  )

  }
  memberRegister()
  {
    if(this.memberReg.valid)
    {

      Swal.fire({
        title: 'Do you want Add Member?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {
          this._finalmemberService.addFinalMember(this.memberReg.value).subscribe(response=>
            {
                          Swal.fire('Request Approve!', '', 'success');
                         
            },
            (error=>
              
              {
                console.log.apply(error);
              })
            );

         
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    console.log(this.memberReg.value);
    this._memberService.deleteMember(this.id).subscribe(response=>{
      this.router.navigate(['/admin']);
    })
   
    }
    console.log(this.memberReg.valid);
  }

}