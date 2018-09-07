import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FichaProvider } from './../../providers/ficha/ficha';
import { Observable } from 'rxjs'

@IonicPage()
@Component({
  selector: 'page-ficha-sistema1',
  templateUrl: 'ficha-sistema1.html',
})
export class FichaSistema1Page {
  contacts: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FichaProvider, private toast: ToastController) {
    this.contacts = this.provider.getAll();
    console.log('contatos: '+ this.contacts);
  }
  newContact() {
    this.navCtrl.push('ContactEditPage');
  }
 
  editContact(contact: any) {
    // Maneira 1
    this.navCtrl.push('ContactEditPage', { contact: contact });
 
    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }
 
  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaSistema1Page');
  }

}
