import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { VolunteerComponent } from '../volunteer/volunteer.component';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../model/volunteer';

@Component({
  selector: 'app-viewvolunteer',
  templateUrl: './viewvolunteer.component.html',
  styleUrls: ['./viewvolunteer.component.css']
})
export class ViewvolunteerComponent implements OnInit {

  id='';
  post='';
  parentsPosts:any=[]=[]
  volunteerList:Volunteer[]=[];
  volunteerReg:FormGroup;
    constructor(private router:Router,
      private _volunteerService:VolunteerService,
      private _formBuilder:FormBuilder,
      public dialog: MatDialog) { 
      this.volunteerReg=this._formBuilder.group(
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
      this.getAllVolunteerDetails();
      console.log(this.id);
    }
   
    
    OnClickFunction(id: number){
      //this.router.navigate(['/volunteer']);
      this.parentsPosts.push(id);
      console.log(id);
    }
    
    getAllVolunteerDetails()
    {
  this._volunteerService.getAllVolunteers().subscribe((response:any)=>
    {
                    this.volunteerList=response;
    },
    (error=>
  {
  console.log(error);
  })
    );
    }
   
    deleteVolunteer(id:number)
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
        
      this._volunteerService.deleteVolunteer(id).subscribe(response=>
        {
             this.getAllVolunteerDetails();
             
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
      const dialogRef = this.dialog.open(VolunteerComponent, {
        data: {id: this.id}
       
      });
      console.log(this.id);
  }
  }
