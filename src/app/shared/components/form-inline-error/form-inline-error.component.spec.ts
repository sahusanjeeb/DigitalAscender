import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInlineErrorComponent } from './form-inline-error.component';

describe('FormInlineErrorComponent', () => {
  let component: FormInlineErrorComponent;
  let fixture: ComponentFixture<FormInlineErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInlineErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInlineErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
