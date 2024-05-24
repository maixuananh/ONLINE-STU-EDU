import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm-send-test',
  templateUrl: './dialog-confirm-send-test.component.html',
  styleUrls: ['./dialog-confirm-send-test.component.scss']
})
export class DialogConfirmSendTestComponent implements OnInit {
  @Input() message: string | null = null;
  @Output() e_close_dialog: EventEmitter<boolean> = new EventEmitter();
  @Output() e_choice_dialog: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  clickEventCloseDialog(): void {
    this.e_close_dialog.emit(true);
  }

  clickEventChoice(answer: boolean): void {
    this.e_choice_dialog.emit(answer);
  }

}
