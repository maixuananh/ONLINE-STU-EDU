import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateTestComponent } from './dialog-create-test.component';

describe('DialogCreateTestComponent', () => {
  let component: DialogCreateTestComponent;
  let fixture: ComponentFixture<DialogCreateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
