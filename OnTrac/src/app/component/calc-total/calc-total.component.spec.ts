import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcTotalComponent } from './calc-total.component';

describe('CalcTotalComponent', () => {
  let component: CalcTotalComponent;
  let fixture: ComponentFixture<CalcTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
