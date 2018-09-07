import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
import { ListafichasPage } from '../listafichas/listafichas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WelcomePage;
  tab2Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = ListafichasPage;

  constructor() {

  }
}
