import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostOfDeliveryComponent } from './cost-of-delivery.component';

describe('CostOfDeliveryComponent', () => {
  let component: CostOfDeliveryComponent;
  let fixture: ComponentFixture<CostOfDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostOfDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostOfDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
