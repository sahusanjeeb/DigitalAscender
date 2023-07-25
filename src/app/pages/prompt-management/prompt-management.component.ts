import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-management',
  templateUrl: './prompt-management.component.html',
  styleUrls: ['./prompt-management.component.scss']
})
export class PromptManagementComponent {
  first = false;
  last = true;

  hello (event:any) {
    console.log(event.target.checked);
    if(event.target.checked){
      this.last = false;
      this.first = true;
    } else {
      this.last = true;
      this.first = false;
    }
  }
}
