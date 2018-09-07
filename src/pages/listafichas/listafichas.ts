import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichaProvider } from './../../providers/ficha/ficha';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-listafichas',
  templateUrl: 'listafichas.html',
})
export class ListafichasPage {
  contacts: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FichaProvider) {
    console.log(this.contacts = this.provider.getAll());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListafichasPage');
  }

}
