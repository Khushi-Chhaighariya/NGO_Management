import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../member.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  preserveWhitespaces:true,
})
export class MemberComponent implements OnInit {
  [x: string]: any;
  memberReg:FormGroup;
  constructor(private _memberService:MemberService,private _formBuilder:FormBuilder,private router:Router,) 
  {
    this.memberReg=this._formBuilder.group(
      {
        //all value are included here for member form 
        id: [0],    
      fullname: ['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])],// These are the validation
           contact : ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
            address:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(30)])],
            employement: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
            reason:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],

      }
    );

   }

  ngOnInit(): void {
  }
  OnClickFunction(id: number){
    this.router.navigate(['/memberlogin']);
   
  }
  memberRegister()
  {
    //if valid then go next
    if(this.memberReg.valid)
    {
//prebuild function libaries
      Swal.fire({//popup
        title: 'Do you want submit the changes?',//like submit than ask save or not
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {//member service -> addMember fire
          //all memberReg all values add addmember then add member go to spring boot then go to the database
          this._memberService.addMember(this.memberReg.value).subscribe(response=>
            {
                          Swal.fire('Request Pending!', '', 'success')
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

   
    }
    console.log(this.memberReg.valid);
  }

}
