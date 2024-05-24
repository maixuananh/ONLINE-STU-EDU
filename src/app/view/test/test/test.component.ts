import { Component, HostListener, OnInit } from '@angular/core';
import { IAnswer, IQuestion, ITest } from 'src/app/model/test.model';
import { TestService } from './test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { CookieUtils } from 'src/app/utils/cookie.utils';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  constructor(protected ts: TestService, protected ar: ActivatedRoute, protected route: Router) { }

  isShowDialogConfirmSendTest: boolean = false;
  isShowDialogConfirmOutTest: boolean = false;

  testId: string | null = null;

  test: ITest | null = null;

  startTime: number | null = null;
  endTime: number | null = null;

  _answers_user: {
    answerId: string;
    questionId: string;
  }[] = [];

  time: number = 0;

  messageDialogConfirm: string | null = null;

  interval: any | null = null;

  protected subs = new SubSink();

  ngOnInit(): void {
    this.startTime = new Date().getTime();
    this.subs.add(this.ar.params.subscribe(query => {
      const id = query['id'];
      if (!id) return;
      this.testId = id;
      this.ts.getTest(id);
    }));

    this.subs.add(this.ts.test$.subscribe(test => {
      this.test = test;
      this.time = test.thoi_gian_lam_bai;
    }));

    this.countDownTime();
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
    this.subs.unsubscribe();
  }

  countDownTime(): void {
    this.interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        if (this.interval) clearInterval(this.interval);
      }
    }, 60000);
  }

  clickEventAnswer(answer: IAnswer): void {
    if (!this.testId) return;
    const data = {
      answerId: answer.id_dapan,
      questionId: answer.id_cauhoi
    };
    for (let index = 0; index < this._answers_user.length; index++) {
      if (answer.id_cauhoi === this._answers_user[index].questionId) {
        this._answers_user[index].answerId = answer.id_dapan;
        return;
      }
    }
    this._answers_user.push(data);
  }

  clickEventSendTest(): void {
    if (!this.test) return;
    const numberAnswerNotChoice = this.test.questions.length - this._answers_user.length;
    if (numberAnswerNotChoice !== 0) {
      this.messageDialogConfirm = 'Bạn có ' + numberAnswerNotChoice + ' câu chưa trả lời. Bạn có muốn nộp không?';
    }
    this.clickEventShowDialogConfirmSendTest();
  }

  clickEventShowDialogConfirmSendTest(): void {
    this.isShowDialogConfirmSendTest = true;
  }

  clickEventCloseDialogConfirmSendTest(): void {
    this.isShowDialogConfirmSendTest = false;
  }

  choiceEventSendTest(answer: boolean): void {
    this.endTime = new Date().getTime();
    if (!this.startTime) return;
    if (!this.test) return;
    if (answer) {
      const second = Math.abs(this.endTime - this.startTime);
      this.subs.add(this.ts.sendTest({
        de_thi_id: this.test.de_thi_id,
        answers: this._answers_user,
        isExpired: Math.floor(second / 60000) > this.test.thoi_gian_lam_bai
      }).subscribe(result => {
        if (result) {
          this.route.navigate(['/']);
          return;
        }
        this.isShowDialogConfirmOutTest = true;
      }));
    }
  }

  clickEventCloseDialogConfirmOutTest(): void {
    this.isShowDialogConfirmOutTest = false;
  }

  clickEventChoiceOutTest(result: boolean): void {
    this.isShowDialogConfirmOutTest = false;
    if (result) this.route.navigate(['/']);
  }

  decideList(data: number): number {
    const result = data / Math.floor(data);
    return result !== 1 ? Math.floor(result) + 1 : data;
  }

  mathFloor(data: number): number {
    return Math.floor(data);
  }
}
