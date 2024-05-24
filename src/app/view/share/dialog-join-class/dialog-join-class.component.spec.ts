import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJoinClassComponent } from './dialog-join-class.component';

describe('DialogJoinClassComponent', () => {
  let component: DialogJoinClassComponent;
  let fixture: ComponentFixture<DialogJoinClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogJoinClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogJoinClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
