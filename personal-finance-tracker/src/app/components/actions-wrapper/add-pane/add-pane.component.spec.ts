import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaneComponent } from './add-pane.component';

describe('AddPaneComponent', () => {
  let component: AddPaneComponent;
  let fixture: ComponentFixture<AddPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
