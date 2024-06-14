import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { FinalmemberService } from '../finalmember.service';
import { Finalmember } from '../model/finalmember';
import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinalmemberComponent } from '../finalmember/finalmember.component';

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.css']
})

export class ViewmemberComponent implements OnInit {


id='';
post='';
parentsPosts:any=[]=[]
 finalmemberList:Finalmember[]=[];
 finalmemberReg:FormGroup;
  constructor(private router:Router,
    private _finalmemberService:FinalmemberService,
    private _formBuilder:FormBuilder,
    public dialog: MatDialog) { 
    this.finalmemberReg=this._formBuilder.group(
      {
        id: [0],    
      fullname: [''],
           contact : [''],
            address: [''],
            employment: [''],
            reason:[''],

      }
    );

   }
 
  ngOnInit(): void {
    this.getAllFinalMemberDetails();
    console.log(this.id);
  }
 
  
  OnClickFunction(id: number){
    //this.router.navigate(['/finalmember']);
    this.parentsPosts.push(id);
    console.log(id);
  }
  
  getAllFinalMemberDetails()
  {
this._finalmemberService.getAllFinalMembers().subscribe((response:any)=>
  {
                  this.finalmemberList=response;
  },
  (error=>
{
console.log(error);
})
  );
  }
 
  deleteFinalMember(id:number)
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
      
    this._finalmemberService.deleteFinalMember(id).subscribe(response=>
      {
           this.getAllFinalMemberDetails();
           
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