import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is a warning</p>`,
  styles: [`
    p {
      border: 0.2rem solid darkred;
      background-color: lightpink;
      padding: 2rem;
    }
  `]
})

export class WarningAlertComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
