import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { StepHostComponent } from './step-host/step-host.component';

const routes: Routes = [
  {
    path: 'workflow', component: WorkflowComponent, children: [
      { path: ':stepId', component: StepHostComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'workflow' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
