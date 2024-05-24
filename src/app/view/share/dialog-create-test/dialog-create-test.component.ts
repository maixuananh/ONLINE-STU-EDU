import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogCreateTestService } from './dialog-create-test.service';
import { ICreateTest, ICreateTestQuestion } from 'src/app/model/test.model';
import { AlertDynamicService } from '../alert-dynamic/alert-dynamic.service';
import { SubSink } from 'subsink';
import { IClass } from 'src/app/model/class.model';
export interface PeriodicElement {
  question: string;
  position: number;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
}

@Component({
  selector: 'app-dialog-create-test',
  templateUrl: './dialog-create-test.component.html',
  styleUrls: ['./dialog-create-test.component.scss'],
  providers: [DialogCreateTestService]
})
export class DialogCreateTestComponent implements OnInit {
  @Output() e_close_dialog: EventEmitter<boolean> = new EventEmitter();
  constructor(protected dcts: DialogCreateTestService, protected ads: AlertDynamicService) { }

  displayedColumns: string[] = ['position', 'question', 'answerA', 'answerB', 'answerC', 'answerD'];
  dataSource: PeriodicElement[] = [];

  classIdSelected: number = 0;

  test_form = new FormGroup({
    test_name: new FormControl('', Validators.compose([Validators.required])),
    time: new FormControl<number>(0, Validators.compose([Validators.required])),
  });

  question_form = new FormGroup({
    question: new FormControl('', Validators.compose([Validators.required])),
    answerA: new FormControl('', Validators.compose([Validators.required])),
    answerB: new FormControl(''),
    answerC: new FormControl(''),
    answerD: new FormControl(''),
  });

  questions: ICreateTestQuestion[] = [];

  currentSelectedTrueValue: number = 0;

  _class: IClass[] = [];

  protected subs = new SubSink();

  ngOnInit(): void {
    this.onStatusCreateTest();
    this.onGetClass();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  onGetClass(): void {
    this.dcts.getClassByAdminId();
    this.subs.add(this.dcts._class$.subscribe(_class => {
      this._class = _class;
    }));
  }

  onStatusCreateTest(): void {
    this.subs.add(this.dcts.status_create_test$.subscribe(result => {
      if(result) {
        this.ads.alert({
          message: 'Tạo đề thi thành công',
          title: 'Tạo đề thi',
          state: "success"
        });
        return;
      }
      this.ads.alert({
        message: 'Tạo đề thi thất bại',
        title: 'Tạo đề thi',
        state: "error"
      });
    }));
  }

  clickEventCloseDialog(): void {
    this.e_close_dialog.emit(true);
  }

  clickEventSelectValueAnswer(value: number): void {
    this.currentSelectedTrueValue = value;
  }

  clickEventSelectClass(value: number): void {
    this.classIdSelected = value;
  }

  clickEventAddQuestion(): void {
    if(!this.question_form.valid) return;
    const data = {
      position: this.dataSource.length + 1,
      question: (this.question_form?.value?.question || ''),
      answerA: (this.question_form?.value?.answerA || ''),
      answerB: (this.question_form?.value?.answerB || ''),
      answerC: (this.question_form?.value?.answerC || ''),
      answerD: (this.question_form?.value?.answerD || '')
    };
    this.dataSource = [...this.dataSource, data];
    this.questions.push({
      content: this.question_form.value?.question || '',
      dap_an: [
        {
          content: this.question_form.value?.answerA || '',
          isTrue: this.currentSelectedTrueValue == 1 ? 1 : 0
        },
        {
          content: this.question_form.value?.answerB || '',
          isTrue: this.currentSelectedTrueValue == 2 ? 1 : 0
        },
        {
          content: this.question_form.value?.answerC || '',
          isTrue: this.currentSelectedTrueValue == 3 ? 1 : 0
        },
        {
          content: this.question_form.value?.answerD || '',
          isTrue: this.currentSelectedTrueValue == 4 ? 1 : 0
        },
      ]
    })
    this.question_form.setValue({
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    });
    this.currentSelectedTrueValue = 0;
  }

  clickEventCreateTest(): void {
    if (!this.test_form.valid) return;
    const data: ICreateTest = {
      name: this.test_form.value?.test_name || '',
      time: this.test_form.value?.time || 60,
      classId: this.classIdSelected,
      questions: this.questions
    };
    console.log(data);
    this.dcts.createTest(data);
    this.classIdSelected = 0;

  }

}
