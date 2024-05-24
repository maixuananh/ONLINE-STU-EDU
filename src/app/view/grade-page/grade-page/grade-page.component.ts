import { Component, OnInit } from '@angular/core';
import { GradePageService } from './grade-page.service';
import { SubSink } from 'subsink';
import { ITest } from 'src/app/model/test.model';
import { take } from 'rxjs';

export interface PeriodicElement {
  username: string;
  correctCount: number;
  total: number;
  isPass: number;
}

@Component({
  selector: 'app-grade-page',
  templateUrl: './grade-page.component.html',
  styleUrls: ['./grade-page.component.scss'],
  providers: [GradePageService]
})
export class GradePageComponent implements OnInit {

  constructor(protected service: GradePageService) { }
  displayedColumns: string[] = ['username', 'correctCount', 'total', 'isPass',];
  dataSource: PeriodicElement[] = [];

  tests: ITest[] = [];

  test_selected: ITest | null = null;

  isNotHaveGradeTest: boolean = false;

  protected subs = new SubSink();

  ngOnInit(): void {  
    this.onGetTests();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onGetTests(): void {
    this.subs.add(this.service.getTests().subscribe(tests => this.tests = tests));
  }

  onGetGrade(): void {
    if (!this.test_selected) return;
    this.subs.add(this.service.getGradeByTestId(this.test_selected.de_thi_id).pipe(take(1)).subscribe(result => {
      if (result.length === 0) {
        this.isNotHaveGradeTest = true;
      }
      this.dataSource = result;
    }));
  }

  clickEventSelectTest(index: number): void {
    this.test_selected = this.tests[index];
    this.onGetGrade();
  }

  clickEventCreateGradePoint(): void {
    if (!this.test_selected) return;
    this.subs.add(this.service.createGradePoint(this.test_selected?.de_thi_id).pipe(take(1)).subscribe(result => {
      this.dataSource = result;
    }));
  }

}
