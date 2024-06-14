import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { FinalmemberService } from '../finalmember.service';
import { MemberService } from '../member.service';
import { Finalmember } from '../model/finalmember';
import { Member } from '../model/member';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinalmemberComponent } from '../finalmember/finalmember.component';

export interface DialogData {
 id:any;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
id:any;
//here making member list getall data unformate data are comeing

 memberList:Member[]=[];
 finalmemberList:Finalmember[]=[];//
 finalmemberReg:FormGroup;
 member:Member =new Member();
  constructor(private router:Router, 
    private _memberService:MemberService,
    private _finalmemberService:FinalmemberService,
    private _formBuilder:FormBuilder,
    public dialog: MatDialog) { 
    this.finalmemberReg=this._formBuilder.group(
      {
        id: [0],    
      fullname: [''],
           contact : [''],
            address: [''],
            employement: [''],
            reason:[''],

      }
    );

   }
 
  ngOnInit(): void {
    this.getAllMemberDetails();
   // console.log(this.id);
  }
 
  
  OnClickFunction(id: number){
    //this.router.navigate(['/finalmember']);
    
    console.log(id);
  }
  //here getallmembers funtion call //self calling function
  getAllMemberDetails()//this is self calling function
  {
this._memberService.getAllMembers().subscribe((response:any)=>//member services call getallmember and stores in response
  {
                  this.memberList=response;// response are store in member list 
  },
  (error=>
{
console.log(error);
})
  );
  }
 /* getMemberById()
  {
        this.id= sessionStorage.getItem('id');
        this._memberService.getMemberById(this.id).subscribe((response:Member)=>
        {
               this.member = response;
              // console.log(response);
        },
        (error)=>
        {
                console.log(error);
        }
        
        
        )
  }
*/
 
  deleteMember(id:number)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to delete this record',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
      
    this._memberService.deleteMember(id).subscribe(response=>
      {
           this.getAllMemberDetails();
           
           swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success'
          )
      },
      (error=>
       {
         console.log(error);
       })
      );

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    }); 

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FinalmemberComponent, {
      
      data: {id: this.id}
     
    });
    console.log(this.id);
}
}