import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FinalmemberService } from '../finalmember.service';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  id:number;
  query:any;
  queryReg:FormGroup;
  constructor(private _activatedRoute:ActivatedRoute,
    private _formBuilder:FormBuilder,private router:Router,
    private _queryService:QueryService,
    private _finalmemberService:FinalmemberService) 
  {
    this.queryReg=_formBuilder.group(
      {
        id: [0],    
      fulname: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
           con : ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
          subject:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
          message:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
          }
          )
        }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this._finalmemberService.getFinalMemberById(this.id).subscribe(response=>
      {
    this.query=response;
    this.queryReg=this._formBuilder.group(
      {
        id: [this.query.id], 
        fulname: [this.query.fulname,Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
                 con : [this.query.con,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
                 subject:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
                 message:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(100)])],
            }
    );
    },
    (error=>{
      console.log(error);
    })
      )
  }
  queryRegister()
  {
    if(this.queryReg.valid)
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
          this._queryService.addQuery(this.queryReg.value).subscribe(response=>
            {
                          Swal.fire('Team will connect you soon!', '', 'success')
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

    console.log(this.queryReg.value);

   
    }
    console.log(this.queryReg.valid);
  }
}