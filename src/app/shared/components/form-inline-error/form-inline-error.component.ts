import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-inline-error',
  templateUrl: './form-inline-error.component.html',
  styleUrls: ['./form-inline-error.component.scss']
})
export class FormInlineErrorComponent {
  @Input() public errorControlName!: AbstractControl<any, any> | undefined;
  @Input() public isSubmitted!: boolean | undefined;
  @Input() public messageConfig!: {
    required: string;
  } | undefined;
  @Input() public isEmpty!: boolean | undefined;
  @Input() public error!: string | undefined;
  @Input() public wrongAttempt!: number | undefined;
  @Input() public errors!: string[];
}
