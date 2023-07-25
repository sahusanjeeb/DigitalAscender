import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptManagementComponent } from './prompt-management.component';

describe('PromptManagementComponent', () => {
  let component: PromptManagementComponent;
  let fixture: ComponentFixture<PromptManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
