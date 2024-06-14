import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Donor } from '../model/donor';
import { DonorService } from '../donor.service';
import { DonorComponent } from '../donor/donor.component';
@Component({
  selector: 'app-viewdonor',
  templateUrl: './viewdonor.component.html',
  styleUrls: ['./viewdonor.component.css']
})
export class ViewdonorComponent implements OnInit {

    id='';
    post='';
    parentsPosts:any=[]=[]
     donorList:Donor[]=[];
     donorReg:FormGroup;
      constructor(private router:Router,
        private _donorService:DonorService,
        private _formBuilder:FormBuilder,
        public dialog: MatDialog) { 
        this.donorReg=this._formBuilder.group(
          {
            id: [0],    
      fullname:[''],
      pancard : [''],
          address: [''],
          city: [''],
          state:[''],
          email:[''],
          contact:[''],
          amount:['']
          }
        );
    
       }
     
      ngOnInit(): void {
        this.getAllDonorDetails();
        console.log(this.id);
      }
     
      
      OnClickFunction(id: number){
        //this.router.navigate(['/donor']);
        this.parentsPosts.push(id);
        console.log(id);
      }
      
      getAllDonorDetails()
      {
    this._donorService.getAllDonors().subscribe((response:any)=>
      {
                      this.donorList=response;
      },
      (error=>
    {
    console.log(error);
    })
      );
      }
     
      deleteDonor(id:number)
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
          
        this._donorService.deleteDonor(id).subscribe(response=>
          {
               this.getAllDonorDetails();
               
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
        const dialogRef = this.dialog.open(DonorComponent, {
          data: {id: this.id}
         
        });
        console.log(this.id);
    }
    }
