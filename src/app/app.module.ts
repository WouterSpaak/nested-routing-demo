import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { StepHostComponent } from './step-host/step-host.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';

const STEPS = [StepOneComponent, StepTwoComponent, StepThreeComponent];

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    StepHostComponent,
    STEPS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [STEPS]
})
export class AppModule { }
