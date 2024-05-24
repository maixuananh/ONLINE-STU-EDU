import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm-out-test',
  templateUrl: './dialog-confirm-out-test.component.html',
  styleUrls: ['./dialog-confirm-out-test.component.scss']
})
export class DialogConfirmOutTestComponent implements OnInit {
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
