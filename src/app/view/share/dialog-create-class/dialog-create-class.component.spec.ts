import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateClassComponent } from './dialog-create-class.component';

describe('DialogCreateClassComponent', () => {
  let component: DialogCreateClassComponent;
  let fixture: ComponentFixture<DialogCreateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
