import { DataToken } from './../../model/data-token';
import { ListModelPage } from './../list-model/list-model';
import { Model } from './../../model/model';
import { KatProvider } from './../../providers/kat/kat';
import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { TokenProvider } from '../../providers/token/token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loader: Loading;
  public response: Array<Model>;
  public lpz: Array<Model>;
  public cba: Array<Model>;
  public scz: Array<Model>;
  constructor(
    public navCtrl: NavController,
    public katService: KatProvider,
    public tokenService: TokenProvider,
    public loadingCtrl: LoadingController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PgIniVerificacionPagoQrPage');
    this.consumirServicio();
  }
  consumirServicio(){
    this.presentLoading();
    let moduloServicio = '/info/genera-token';
    let objModulo = {
      user: 'guanyu'
    }
    this.katService.post<DataToken>(moduloServicio,objModulo)
      .subscribe(data => {
       
          this.tokenService.set(data.token);
          let urlSegundo = '/model/listar-model';
          this.katService.get<Array<Model>>(urlSegundo)
            .subscribe(data => {
              this.dismissLoading();
              this.response = data;
              console.log(this.response)
              this.lpz = this.response.filter(word => word.ciudad == 'LPZ');
              console.log(this.lpz)
              this.cba = this.response.filter(word => word.ciudad == 'CBA');
              console.log(this.cba)
              this.scz = this.response.filter(word => word.ciudad == 'SCZ');
              console.log(this.scz)
            }, error => {
              this.dismissLoading();
              //TODO: error
            })
        
      }, error =>{
        this.dismissLoading();
          //TODO: error
      });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Obteniendo los datos..."
    });
    this.loader.present();
  }

  dismissLoading() {
    if (this.loader) {
      this.loader.dismissAll();
      this.loader = null;
    }
  }
  irA(dep: string){
    let filtro = this.response.filter(word => word.ciudad == dep);
    console.log(filtro)
    this.navCtrl.push(ListModelPage,{data: filtro});
  }

}
