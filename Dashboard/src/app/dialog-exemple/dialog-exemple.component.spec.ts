import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExempleComponent } from './dialog-exemple.component';

describe('DialogExempleComponent', () => {
  let component: DialogExempleComponent;
  let fixture: ComponentFixture<DialogExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
