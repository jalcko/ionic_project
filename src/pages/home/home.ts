import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnoPage } from '../uno/uno';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string = "";

  constructor(public navCtrl: NavController) {

  }

  goToPage() {
    this.navCtrl.push(UnoPage)
  }

}

