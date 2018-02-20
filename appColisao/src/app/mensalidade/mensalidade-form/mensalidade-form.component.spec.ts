import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalidadeFormComponent } from './mensalidade-form.component';

describe('MensalidadeFormComponent', () => {
  let component: MensalidadeFormComponent;
  let fixture: ComponentFixture<MensalidadeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalidadeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
