import {Component} from '@angular/core'; 
import {PropertyList} from '../properties/property-list/property-list';
import {Settings} from '../settings/settings';

@Component({
  templateUrl: 'build/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = PropertyList;
    this.tab2Root = Settings; 
  }
}
