import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurnitureComponent } from './home-furniture.component';

describe('HomeFurnitureComponent', () => {
  let component: HomeFurnitureComponent;
  let fixture: ComponentFixture<HomeFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
