import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MemberComponent } from './member/member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorComponent } from './donor/donor.component';
import { AdminComponent } from './admin/admin.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { Router, RouterModule } from '@angular/router';
import { AchieversComponent } from './achievers/achievers.component';
import { DetailsComponent } from './details/details.component';
import { WhatComponent } from './what/what.component';

import { ContactComponent } from './contact/contact.component';
import { FinalmemberComponent } from './finalmember/finalmember.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewvolunteerComponent } from './viewvolunteer/viewvolunteer.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { ViewdonorComponent } from './viewdonor/viewdonor.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';
import { PayementpageComponent } from './payementpage/payementpage.component';

@NgModule({
  declarations: [
    AppComponent,
 
    IndexComponent,
  
    VolunteerComponent,
    MemberComponent,
    DonorComponent,
    AdminComponent,
    ViewmemberComponent,
    AdminLoginComponent,
    AboutComponent,
    EventsComponent,
    AchieversComponent,
    DetailsComponent,
    WhatComponent,
   
    ContactComponent,
    FinalmemberComponent,
    ViewvolunteerComponent,
    MemberLoginComponent,
    ViewdonorComponent,
    ViewqueryComponent,
    PayementpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
