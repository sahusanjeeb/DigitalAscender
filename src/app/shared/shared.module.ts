import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module';
import { UiModule } from '@collab/comp-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInlineErrorComponent } from './components/form-inline-error/form-inline-error.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    declarations: [
    FormInlineErrorComponent,
    LoadingComponent
  ],
    imports: [CommonModule, SharedRoutingModule, UiModule,FormsModule,ReactiveFormsModule],
    exports: [CommonModule, UiModule,FormInlineErrorComponent, LoadingComponent],
})
export class SharedModule {}
