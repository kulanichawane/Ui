import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DsiPage } from '../dsi/dsi';
import { SignPage } from '../sign/sign';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  next(){
    this.navCtrl.push(SignPage);
  }

}
