import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchieversComponent } from './achievers/achievers.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { DonorComponent } from './donor/donor.component';
import { EventsComponent } from './events/events.component';
import { FinalmemberComponent } from './finalmember/finalmember.component';
import { IndexComponent } from './index/index.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberComponent } from './member/member.component';
import { PayementpageComponent } from './payementpage/payementpage.component';
import { ViewdonorComponent } from './viewdonor/viewdonor.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';
import { ViewvolunteerComponent } from './viewvolunteer/viewvolunteer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { WhatComponent } from './what/what.component';

const routes: Routes = [

  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'achievers/:id',component:AchieversComponent},
  {path:'events/:id',component:EventsComponent},
  {path:'donor',component:DonorComponent},
  {path:'details',component:DetailsComponent},
  {path:'what',component:WhatComponent},
  {path:'member',component:MemberComponent},
  {path:'volunteer',component:VolunteerComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'finalmember',component:FinalmemberComponent},
  {path:'viewmember',component:ViewmemberComponent},
  {path:'viewvolunteer',component:ViewvolunteerComponent},
  {path:'memberlogin',component:MemberLoginComponent},
  {path:'viewdonor',component:ViewdonorComponent},
  {path:'finalmember/:id',component:FinalmemberComponent},
  {path:'',component:IndexComponent},
  {path:'events:',component:EventsComponent},
  {path:'memberlogin  :',component:MemberLoginComponent},
  {path:'viewquery',component:ViewqueryComponent},
  {path:'payementpage',component:PayementpageComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }
