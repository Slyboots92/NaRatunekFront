import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsHeaderComponent } from './donors-header.component';

describe('DonorsHeaderComponent', () => {
  let component: DonorsHeaderComponent;
  let fixture: ComponentFixture<DonorsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
