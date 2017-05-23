import {Component,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';
import {Access} from '../models/Access';
import {detailsComponent} from './details.component';
import { CookieService } from 'ng2-cookies';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  providers: [ CookieService ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})
export class AppComponent {
  private secretKey:string = "FAD24C6C42F68F37AB584D29C57A6";
  private encryptPass:string;
  private Coll:Collection;
  private collection: User[];
  private currentUser:User = new User({}); // Important !
  private tokenAuth:Access = new Access({});
  private modalVisible:boolean = false;
  private modalVisibleAnimate:boolean = false;
  private advertising = false;
  private login:string;
  private pass:string;
  private title = 'Welcome';
  private hasCookieToken:boolean=false;

  constructor(Collection: Collection, public cookieService: CookieService){
    this.Coll = Collection;
    if(this.hasCookieToken)
      this.loadCollection();
    else
      this.showModal();
  }
  addCookie(cName: string, cValue: string) {
    console.log('Adding: ', cName, cValue);
    this.cookieService.set(cName, cValue);
  }
  loadCollection():void{
    this.Coll.getUsers().subscribe(collection=>{
      this.collection = collection;
    });
  }
  public showModal(): void {
    this.modalVisible = true;
    setTimeout(() => this.modalVisibleAnimate = true, 400);
  }

  public hideModal(): void {
    /* A implémenter côté serveur
    this.encryptPass=CryptoJS.AES.encrypt(this.pass,this.secretKey);
    this.Coll.getAccess(this.login,this.encryptPass.toString()).subscribe(tokenAuth=>{
        if(tokenAuth[0].status){
          this.addCookie("authToken",tokenAuth[0].token);
          this.modalVisibleAnimate = false;
          setTimeout(() => this.modalVisible = false, 300);
          this.loadCollection();
        }else{
          this.advertising = true;
      }

    });
    */
    if(this.login == 'demo' && this.pass=='123'){
      this.modalVisibleAnimate = false;
      setTimeout(() => this.modalVisible = false, 300);
      this.loadCollection()
    }else{
      this.advertising = true;
    }
  }
  getDetails(event : Event):void{
    event.preventDefault();
    let element = (<HTMLTextAreaElement>event.target);
    this.Coll.getOneUser(element.id).subscribe(currentUser=>{
      this.currentUser = new User({
        "Titre":currentUser[0].Titre,
        "Nom":currentUser[0].Nom,
        "Prenom":currentUser[0].Prenom,
        "Rue_num1":currentUser[0].Rue_num1,
        "Pays":currentUser[0].Pays,
        "Nom_ville":currentUser[0].Nom_ville,
        "idUsers":currentUser[0].idUsers,
        "code_postal":currentUser[0].code_postal
      });
    });
  }
}
