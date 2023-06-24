import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxGridComponent } from './tx-grid.component';

describe('TxGridComponent', () => {
  let component: TxGridComponent;
  let fixture: ComponentFixture<TxGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
