import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNeedsComponent } from './daily-needs.component';

describe('DailyNeedsComponent', () => {
  let component: DailyNeedsComponent;
  let fixture: ComponentFixture<DailyNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
