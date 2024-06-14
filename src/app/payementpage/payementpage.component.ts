import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payementpage',
  templateUrl: './payementpage.component.html',
  styleUrls: ['./payementpage.component.css']
})
export class PayementpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
OnClickFunction(){
    this.router.navigate(['/donate']);
    console.log("Hello");
  }
}
