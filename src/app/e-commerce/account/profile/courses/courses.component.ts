import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../account.service';

@Component({
  selector: 'app-profile-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input()
  public user: any = null;
  public courses: any = [];
  public keys = Object.keys;

  constructor(private _AccountService: AccountService) {}

  async ngOnInit (): Promise<any> {
    this.courses = (await this._AccountService.getCourses()).data;
  }
}
