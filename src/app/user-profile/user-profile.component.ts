import { Component, OnInit,Input } from '@angular/core';
import {User} from "../shared/models/user";

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="jumbotron" *ngIf="user">
      <h2>{{user.name}} ({{ user.username }})</h2>
      <input class="form-control" type="text" [(ngModel)]="user.name">
    </div>
  `,
  styles: []
})
export class UserProfileComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
