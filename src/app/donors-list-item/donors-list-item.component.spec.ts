import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsListItemComponent } from './donors-list-item.component';

describe('DonorsListItemComponent', () => {
  let component: DonorsListItemComponent;
  let fixture: ComponentFixture<DonorsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
