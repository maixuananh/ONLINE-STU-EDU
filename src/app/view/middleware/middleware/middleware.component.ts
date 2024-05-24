import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MiddlewareService } from './middleware.service';
import { IClass } from 'src/app/model/class.model';
import { SubSink } from 'subsink';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-middleware',
  templateUrl: './middleware.component.html',
  styleUrls: ['./middleware.component.scss'],
  providers: [MiddlewareService]
})
export class MiddlewareComponent implements OnInit {

  constructor(protected mws: MiddlewareService, protected activatedRoute: ActivatedRoute, protected router: Router) { }

  indexSidebar: number = 0;

  isShowSidebar: boolean = false;

  classroomId: number | null = null;

  _class: IClass[] = [];

  protected subs = new SubSink();

  ngOnInit(): void {
    this.onGetParams();
    this.onReloadPage();
    this.onGetClass();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  onGetParams(): void {
    this.subs.add(
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(event => {
        const navigation_end = (event as NavigationEnd);
        if ((event as NavigationEnd).url.indexOf('classroom') !== -1) {
          const classroomId = Number(navigation_end.url.split('classroom/')[1]);
          if (isNaN(classroomId)) return;
          this.classroomId = classroomId;
        }
      })
    );
  }

  onReloadPage(): void {
    const url = this.router.url;
    if (url.indexOf('classroom') !== -1) {
      const classroomId = Number(url.split('classroom/')[1]);
      if (isNaN(classroomId)) return;
      this.classroomId = classroomId;
    }
  }

  onGetClass(): void {
    this.mws.getClass();
    this.subs.add(this.mws._class$.subscribe(classes => this._class = classes));
  }

  clickEventShowSidebar(mat: MatDrawer): void {
    this.isShowSidebar = !this.isShowSidebar;
    mat.toggle();
  }

}
