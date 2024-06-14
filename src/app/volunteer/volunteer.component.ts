import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  preserveWhitespaces:true,
})
export class VolunteerComponent implements OnInit {
  volunteerReg:FormGroup;
  constructor(private _volunteerService:VolunteerService,private _formBuilder:FormBuilder) { 
  this.volunteerReg=this._formBuilder.group(
    {
      id: [0],    
      fullname:  ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(30)])] ,
         contact :  ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
         
          address:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])],
          
          employement: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(30)])],
         
          reason:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(35)])],
         

    }
  );
  }


  ngOnInit(): void {
  }
 volunteerRegister()
  {
    if(this.volunteerReg.valid)
    {

      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) 
        {
          this._volunteerService.addVolunteer(this.volunteerReg.value).subscribe(response=>
            {
                          Swal.fire('Become Volunteer Successfully!', '', 'success')
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

    console.log(this.volunteerReg.value);

   
    }
    console.log(this.volunteerReg.valid);
  }
}

