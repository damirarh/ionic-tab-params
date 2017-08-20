import { TabPage } from './../tab/tab';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = TabPage;
  tab1Params = { mode: 1 };
  tab2Root = TabPage;
  tab2Params = { mode: 2 };

}
