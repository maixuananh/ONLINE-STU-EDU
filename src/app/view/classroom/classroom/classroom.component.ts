import { Component, OnInit } from '@angular/core';
import { ClassRoomService } from './classroom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { ITestRaw } from 'src/app/model/test.model';
import { CookieUtils } from 'src/app/utils/cookie.utils';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss'],
  providers: [ClassRoomService]
})
export class ClassroomComponent implements OnInit {

  constructor(protected clrs: ClassRoomService, protected activated_route: ActivatedRoute, protected router: Router) { }

  classRoomId: string | null = null;

  _tests: ITestRaw[] = [];

  test_choice: ITestRaw | null = null;

  isShowDialogConfirmTest: boolean = false;

  classRoomJoinId: string = '';

  protected subs = new SubSink();

  ngOnInit(): void {
    this.subs.add(this.activated_route.params.subscribe(params => {
      const id = params['id'];
      this.classRoomId = id;
      this.clrs.getTests(id);
    }));
    this.subs.add(this.activated_route.queryParams.subscribe(query => {
      this.classRoomJoinId = query['classroom_join_id'];
    }));
    this.subs.add(this.clrs._tests$.subscribe(tests => {
      this._tests = tests;
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  clickEventChoiceTest(data: ITestRaw): void {
    this.test_choice = data;
    this.isShowDialogConfirmTest = true;
  }

  clickEventConfirmStartTest(result: boolean): void {
    if (result) this.router.navigate(['/test/' + this.test_choice?.de_thi_id]);
    this.isShowDialogConfirmTest = false;
  }

  clickEventCloseDialog(): void {
    this.isShowDialogConfirmTest = false;
  }

  clickEventCopyIdJoin(): void {
    navigator.clipboard.writeText(this.classRoomJoinId)
    .then(function() {
        console.log('Đã sao chép thành công');
    })
    .catch(function(err) {
        console.error('Lỗi khi sao chép');
    });
  }

}
