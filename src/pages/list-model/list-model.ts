import { Model } from './../../model/model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetModelPage } from '../det-model/det-model';

/**
 * Generated class for the ListModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-model',
  templateUrl: 'list-model.html',
})
export class ListModelPage {

  public request: Array<Model>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.request = this.navParams.get('data');
    console.log("**********************************");
    console.log(JSON.stringify(this.request));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LisModelPage');
  }
  verDetalle(model: Model){
    this.navCtrl.push(DetModelPage, {data: model});
  }

}
//https://m.me/3052686468090364
//https://wa.me/15096771242