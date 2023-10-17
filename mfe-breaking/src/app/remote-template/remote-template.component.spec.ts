import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteTemplateComponent } from './remote-template.component';

describe('RemoteTemplateComponent', () => {
  let component: RemoteTemplateComponent;
  let fixture: ComponentFixture<RemoteTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
