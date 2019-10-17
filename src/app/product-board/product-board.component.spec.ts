import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoardComponent } from './product-board.component';

describe('ProductBoardComponent', () => {
  let component: ProductBoardComponent;
  let fixture: ComponentFixture<ProductBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
