import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieUtils } from 'src/app/utils/cookie.utils';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(protected route: Router) { }
  
  isShowDialogAddTest: boolean = false;
  isShowDialogJoinClass: boolean = false;
  isShowDialogCreateClass: boolean = false;

  ngOnInit(): void {

  }

  clickEventLogout(): void {
    CookieUtils.clearCookieAuthToken();
    this.route.navigate(['/login']);
  }

  clickEventShowDialogAddTest(): void {
    this.isShowDialogAddTest = true;
  }

  clickEventCloseDialog(): void {
    this.isShowDialogAddTest = false;
  }

  clickEventCloseDialogCreateClass(): void {
    this.isShowDialogCreateClass = false;
  }

  clickEventShowDialogJoinClass(): void {
    this.isShowDialogJoinClass = true;
  }

  clickEventCloseDialogJoinClass(): void {
    this.isShowDialogJoinClass = false;
  }

  clickEventShowDialogCreateClass(): void {
    this.isShowDialogCreateClass = true;
  }

}
