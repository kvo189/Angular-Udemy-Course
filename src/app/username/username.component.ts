import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
})
export class UsernameComponent implements OnInit {
  username: string = 'Default';

  constructor() {
  }

  ngOnInit(): void {
  }

  resetUsername(): void {
    this.username = '';
  }

  isUsernameEmpty(): boolean {
    return (!this.username || this.username.length === 0);
  }
}
