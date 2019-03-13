import { Injectable } from '@angular/core';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {
  public token: string;
  constructor() {
    
  }
  get(){
    return this.token;
  }
  set(token:string){
    this.token = token;
  }

}
