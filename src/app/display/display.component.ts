import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [`
    .white {
      color: white
    }
  `]
})
export class DisplayComponent implements OnInit {
  isShown: boolean = false;
  loggedBtnClicks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay():void{
    this.isShown=!this.isShown;
    this.loggedBtnClicks.push(new Date().toLocaleTimeString() + ': Display Details button is clicked!');
  }

}
