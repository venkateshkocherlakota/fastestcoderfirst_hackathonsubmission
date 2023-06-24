import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxEditModalComponent } from './tx-edit-modal.component';

describe('TxEditModalComponent', () => {
  let component: TxEditModalComponent;
  let fixture: ComponentFixture<TxEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
