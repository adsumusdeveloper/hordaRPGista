import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { ListafichasPage } from '../pages/listafichas/listafichas';
import { ListafichasPageModule } from '../pages/listafichas/listafichas.module';
import { DetalhesSistema1Page } from '../pages/detalhes-sistema1/detalhes-sistema1';
import { DetalhesSistema2Page } from '../pages/detalhes-sistema2/detalhes-sistema2';
import { DetalhesSistema1PageModule } from '../pages/detalhes-sistema1/detalhes-sistema1.module';
import { DetalhesSistema2PageModule } from '../pages/detalhes-sistema2/detalhes-sistema2.module';
import { FichaSistema1PageModule } from '../pages/ficha-sistema1/ficha-sistema1.module';
import { FichaSistema2PageModule } from '../pages/ficha-sistema2/ficha-sistema2.module';
import { FichaProvider } from '../providers/ficha/ficha';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    ListafichasPageModule,
    DetalhesSistema1PageModule,
    DetalhesSistema2PageModule,
    FichaSistema1PageModule,
    FichaSistema2PageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAo4iMdJz6HXrgmg-C2px9E86WMu25qP-0",
      authDomain: "quem-me-deve.firebaseapp.com",
      databaseURL: "https://quem-me-deve.firebaseio.com",
      projectId: "quem-me-deve",
      storageBucket: "quem-me-deve.appspot.com",
      messagingSenderId: "370286620388"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FichaProvider
  ]
})
export class AppModule {}
