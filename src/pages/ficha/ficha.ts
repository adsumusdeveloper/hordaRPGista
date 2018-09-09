import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ficha',
  templateUrl: 'ficha.html',
})
export class FichaPage {
  ficha: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ficha = navParams.get('ficha');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaPage');
  }

}
