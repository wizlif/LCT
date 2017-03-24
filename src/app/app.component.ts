import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import ImgCache           from 'imgcache.js';


@Component({
  template: `<ion-nav #nav></ion-nav>`
})
export class MyApp {
  @ViewChild('nav') nav: Nav;

  constructor(platform: Platform,StatusBar:StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // activated debug mode
      ImgCache.options.debug = true;
      // page is set until img cache has started
      ImgCache.init(()=>{ this.nav.setRoot(TabsPage); },
        ()=>{ console.error('ImgCache init: error! Check the log for errors');});

    });

  }
}
