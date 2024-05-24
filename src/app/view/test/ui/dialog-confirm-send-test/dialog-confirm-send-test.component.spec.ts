import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmSendTestComponent } from './dialog-confirm-send-test.component';

describe('DialogConfirmSendTestComponent', () => {
  let component: DialogConfirmSendTestComponent;
  let fixture: ComponentFixture<DialogConfirmSendTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmSendTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmSendTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
