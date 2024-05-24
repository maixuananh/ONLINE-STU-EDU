import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { DialogCreateClassService } from './dialog-create-class.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dialog-create-class',
  templateUrl: './dialog-create-class.component.html',
  styleUrls: ['./dialog-create-class.component.scss'],
  providers: [DialogCreateClassService]
})
export class DialogCreateClassComponent implements OnInit {
  @Output() e_close_dialog: EventEmitter<boolean> = new EventEmitter();
  constructor(protected service: DialogCreateClassService) { }

  username: string = '';

  create_class_form = new FormGroup({
    class_name: new FormControl('', Validators.compose([Validators.required])),
    description: new FormControl(''),
  });

  protected subs = new SubSink();

  ngOnInit(): void {
    this.username = CookieUtils.getCookieUsername();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  clickEventCloseDialog(): void {
    this.e_close_dialog.emit(true);
  }

  clickEventCreateClass(): void {
    if (!this.create_class_form.valid) return;
    this.subs.add(this.service.createClass({
      class_name: this.create_class_form.value.class_name || '',
      description: this.create_class_form.value.description || ''
    }).subscribe(() => {
      this.e_close_dialog.emit(true);
    }));
  }

}
