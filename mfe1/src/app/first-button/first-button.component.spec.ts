import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstButtonComponent } from './first-button.component';

describe('FirstButtonComponent', () => {
  let component: FirstButtonComponent;
  let fixture: ComponentFixture<FirstButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
