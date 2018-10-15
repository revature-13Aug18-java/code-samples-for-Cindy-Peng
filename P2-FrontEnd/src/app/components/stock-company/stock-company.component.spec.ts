import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCompanyComponent } from './stock-company.component';

describe('StockCompanyComponent', () => {
  let component: StockCompanyComponent;
  let fixture: ComponentFixture<StockCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
