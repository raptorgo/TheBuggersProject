import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSensorDialogComponent } from './data-sensor-dialog.component';

describe('DataSensorDialogComponent', () => {
  let component: DataSensorDialogComponent;
  let fixture: ComponentFixture<DataSensorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSensorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSensorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
