import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptManagementComponent } from './prompt-management.component';
import { PromptManagementRoutingModule } from './prompt-management-routing.module';

@NgModule({
  declarations: [
    PromptManagementComponent,
  ],
  imports: [
    CommonModule,
    PromptManagementRoutingModule
  ],
  exports: [
    PromptManagementComponent,
  ],
})
export class PromptManagementModule { }
