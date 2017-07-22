import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumPointsService} from './sumPoints.service';

import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { LandingComponent } from './landing/landing.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';
import { ResponseComponent } from './response/response.component';

const appRoutes: Routes = [
{path: '', component: LandingComponent},
{path: 'q1', component: Q1Component},
{path: 'q2', component: Q2Component},
{path: 'q3', component: Q3Component},
{path: 'q4', component: Q4Component},
{path: 'q5', component: Q5Component},
{path: 'q6', component: Q6Component},
{path: 'q7', component: Q7Component},
{path: 'response', component: ResponseComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    LandingComponent,
    Q2Component,
    Q3Component,
    Q4Component,
    Q5Component,
    Q6Component,
    Q7Component,
    ResponseComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SumPointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
