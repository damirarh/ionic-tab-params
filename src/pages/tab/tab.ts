import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  mode: number

  constructor(navParams: NavParams) {
    this.mode = navParams.get('mode');
  }
}
