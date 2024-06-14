import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonorService } from '../donor.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

 donorReg:FormGroup;
  constructor(private _donorService:DonorService,private _formBuilder:FormBuilder, private _router:Router) 
  { 
  this.donorReg=this._formBuilder.group(
    {
      id: [0],    
      fullname:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          
      pancard : ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
          
          address:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
          
          city: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
         
          state:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
         
          email:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(30)])],
        
          contact:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
         
          amount:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(10)])]
          

    }
  );
  }
  ngOnInit(): void {
  
  }
  donorRegister()
  {
    if(this.donorReg.valid)
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
          this._donorService.addDonor(this.donorReg.value).subscribe(response=>
            {
                          Swal.fire('Thank you for helping us!', '', 'success')
                          this._router.navigate(['/payementpage']);
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

    console.log(this.donorReg.value);

   
    }
    console.log(this.donorReg.valid);
  }
}