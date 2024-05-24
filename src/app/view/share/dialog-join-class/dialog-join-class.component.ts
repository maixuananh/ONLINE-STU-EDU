import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogJoinClassService } from './dialog-join-class.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dialog-join-class',
  templateUrl: './dialog-join-class.component.html',
  styleUrls: ['./dialog-join-class.component.scss'],
  providers: [DialogJoinClassService]
})
export class DialogJoinClassComponent implements OnInit {
  @Output() e_close_dialog: EventEmitter<boolean> = new EventEmitter();
  constructor(protected service: DialogJoinClassService) { }

  protected subs = new SubSink();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  join_class_form = new FormGroup({
    classroom_id: new FormControl('', Validators.required)
  });

  clickEventCloseDialog(): void {
    this.e_close_dialog.emit(true);
  }

  clickEventJoinClass(): void {
    if (!this.join_class_form.valid) return;
    this.subs.add(this.service.joinClass(this.join_class_form.value.classroom_id || '').subscribe(result => {
      if (result) this.e_close_dialog.emit(true);
    }));
  }

}
