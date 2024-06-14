import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-viewquery',//are select component
  templateUrl: './viewquery.component.html',//html file
  styleUrls: ['./viewquery.component.css']//this are css file
})
export class ViewqueryComponent implements OnInit 
{ id='';

queryReg:FormGroup;
  queryList: any;//data print in quary
  constructor(private router:Router,//if call any component than used constructor 
    private _queryService:QueryService,
    private _formBuilder:FormBuilder,
    
    ) { 
    this.queryReg=this._formBuilder.group(
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
 
  ngOnInit(): void {//here are calling function before loading a page
    this.getAllQueryDetails();
    console.log(this.id);//for testing
  }
 
 
  getAllQueryDetails()
  {
this._queryService.getAllQuerys().subscribe((response:any)=>
  {
                  this.queryList=response;
                  //_memberService
                  //this._memberService.addmember(this.queryReg.value).subscribe((response:any))=>
  },
  (error=>
{
console.log(error);
})
  );
  }
 //here are delete the quary
  deleteQuery(id:number)
  {
    const swalWithBootstrapButtons = Swal.mixin({//heare are show delete or not
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
      
    this._queryService.deleteQuery(id).subscribe(response=>
      {
           this.getAllQueryDetails();
           
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

 

}
