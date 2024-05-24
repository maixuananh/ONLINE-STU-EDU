import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmOutTestComponent } from './dialog-confirm-out-test.component';

describe('DialogConfirmOutTestComponent', () => {
  let component: DialogConfirmOutTestComponent;
  let fixture: ComponentFixture<DialogConfirmOutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmOutTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmOutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
