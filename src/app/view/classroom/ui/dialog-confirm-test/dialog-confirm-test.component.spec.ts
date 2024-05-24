import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmTestComponent } from './dialog-confirm-test.component';

describe('DialogConfirmTestComponent', () => {
  let component: DialogConfirmTestComponent;
  let fixture: ComponentFixture<DialogConfirmTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
