import { Component, OnInit } from '@angular/core';
import { IClass } from 'src/app/model/class.model';
import { HomeService } from './home.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(protected hs: HomeService) { }

  _class_list: IClass[] = [];

  protected subs = new SubSink();

  ngOnInit(): void {
    this.hs.getClass();
    this.subs.add(this.hs._class_list$.subscribe(data => {
      this._class_list = data;
    }));
  }

  ngOnDestroy(): void {
    this.hs.removeData();
    this.subs.unsubscribe();
  }

}
