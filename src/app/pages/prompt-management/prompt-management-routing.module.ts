import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptManagementComponent } from './prompt-management.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'prompt_management'
  },

  {
    path: 'prompt_management',
    component:PromptManagementComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromptManagementRoutingModule { }
