import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm-test',
  templateUrl: './dialog-confirm-test.component.html',
  styleUrls: ['./dialog-confirm-test.component.scss']
})
export class DialogConfirmTestComponent implements OnInit {
  @Output() e_close_dialog: EventEmitter<boolean> = new EventEmitter();
  @Output() e_confirm_dialog: EventEmitter<boolean> = new EventEmitter();
  @Input() nameTest: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  clickEventCloseDialog(): void {
    this.e_close_dialog.emit(true);
  }

  clickEventConfirmDialog(result: boolean): void {
    this.e_confirm_dialog.emit(result);
  }

}
