import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent implements OnInit {
  @Input() nameClass: string = '';
  @Input() teacherName: string = '';
  @Input() classId: number | null = null;
  @Input() description: string = '';
  @Input() classroomJoinId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
