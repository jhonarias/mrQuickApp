import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPlacesPage } from '../list-places/list-places';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listPlacepage: any;
  toggleLogout = false;
  constructor(public navCtrl: NavController) {
    this.listPlacepage = ListPlacesPage;
  }

}
