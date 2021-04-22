import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaperDriveComponent } from './diaper-drive.component';

describe('DiaperDriveComponent', () => {
  let component: DiaperDriveComponent;
  let fixture: ComponentFixture<DiaperDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaperDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaperDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
