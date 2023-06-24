import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAreaComponent } from './balance-area.component';

describe('BalanceAreaComponent', () => {
  let component: BalanceAreaComponent;
  let fixture: ComponentFixture<BalanceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
